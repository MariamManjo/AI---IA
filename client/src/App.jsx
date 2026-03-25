import React, { useState, useEffect, useRef, useCallback } from 'react'
import Sidebar from './components/Sidebar.jsx'
import TopBar from './components/TopBar.jsx'
import Toast from './components/Toast.jsx'
import { BUILDERS } from './levels/builders.js'
import { CHARTFNS } from './levels/charts.js'
import { QUIZZES } from './data/quizzes.js'
import { loadState, saveState, syncToServer } from './store/gameState.js'

// Quiz state (per session, separate from persistent GS)
const QS = {}
function initQ(id) {
  if (!QS[id]) QS[id] = { a: {}, score: 0, done: false }
}

export default function App() {
  const [gs, setGs] = useState(loadState)
  const [curLevel, setCurLevel] = useState(1)
  const [toast, setToast] = useState('')
  const toastKey = useRef(0)
  const contentRef = useRef(null)

  const showToast = useCallback((msg) => {
    toastKey.current++
    setToast(msg + '\u200b'.repeat(toastKey.current % 3))
  }, [])

  const updateGs = useCallback((updater) => {
    setGs(prev => {
      const next = updater(prev)
      saveState(next)
      syncToServer(next)
      return next
    })
  }, [])

  // Register interactive functions on window so inline HTML handlers work
  useEffect(() => {
    window._tokenize = (v) => {
      const toks = (v.match(/\w+|[^\w\s]|\s+/g) || []).filter(t => t.trim()).reduce((a, t) => {
        if (t.length > 6) { for (let i = 0; i < t.length; i += 3) a.push(t.slice(i, i + 3)) }
        else a.push(t)
        return a
      }, [])
      const out = document.getElementById('tok-out')
      const meta = document.getElementById('tok-meta')
      if (out) out.innerHTML = toks.map((t, i) => `<div class="tok-wrap"><span class="tok t${(i % 6) + 1}">${t.replace(/</g, '&lt;')}</span><span class="tok-id">${1000 + i}</span></div>`).join('')
      if (meta) meta.textContent = `${toks.length} tokens · ~${Math.ceil(toks.length * 4)} chars`
    }
    window._tempFx = (v) => {
      const tvEl = document.getElementById('tv')
      const teffEl = document.getElementById('teff')
      if (tvEl) tvEl.textContent = parseFloat(v).toFixed(1)
      const t = parseFloat(v)
      let txt
      if (t <= 0.2) txt = `<strong style="color:var(--green)">Deterministic</strong> — Same input always gives same output. Best for facts, classification, extraction.`
      else if (t <= 0.7) txt = `<strong style="color:var(--amber)">Balanced</strong> — Slight variation. Good for summaries, analysis, code.`
      else if (t <= 1.2) txt = `<strong style="color:var(--orange)">Creative</strong> — Diverse outputs. Good for brainstorming, writing, ideation.`
      else txt = `<strong style="color:var(--coral)">Chaotic</strong> — Highly unpredictable. High hallucination risk. Experimental only.`
      if (teffEl) teffEl.innerHTML = txt
    }
    window._roiCalc = (v) => {
      const rvEl = document.getElementById('rv')
      const roiEl = document.getElementById('roi-out')
      if (rvEl) rvEl.textContent = parseInt(v).toLocaleString()
      const n = parseInt(v), time = Math.round(n * 14.5 / 60), cost = Math.round(n * 3.2)
      if (roiEl) roiEl.innerHTML = `⏱ <strong>${time.toLocaleString()} hrs</strong> saved/month &nbsp;·&nbsp; 💵 <strong>$${cost.toLocaleString()}</strong> saved/month &nbsp;·&nbsp; 📈 <strong>$${(cost * 12).toLocaleString()}</strong>/year`
    }
    return () => {
      delete window._tokenize
      delete window._tempFx
      delete window._roiCalc
    }
  }, [])

  // Quiz click handler via event delegation
  useEffect(() => {
    const cnt = contentRef.current
    if (!cnt) return
    const handler = (e) => {
      const btn = e.target.closest('.opt')
      if (!btn) return
      const lvl = parseInt(btn.dataset.lvl)
      const qi = parseInt(btn.dataset.qi)
      const sel = parseInt(btn.dataset.sel)
      pickAnswer(lvl, qi, sel)
    }
    cnt.addEventListener('click', handler)
    return () => cnt.removeEventListener('click', handler)
  })

  const pickAnswer = useCallback((lvl, qi, sel) => {
    initQ(lvl)
    if (QS[lvl]?.done || QS[lvl]?.a[qi] !== undefined) return
    const q = QUIZZES[lvl][qi]
    QS[lvl].a[qi] = sel
    const ok = sel === q.a
    if (ok) {
      updateGs(prev => ({ ...prev, xp: prev.xp + 10 }))
      QS[lvl].score++
      showToast('✅ +10 XP')
    } else {
      showToast('❌ Wrong — see explanation')
    }
    document.querySelectorAll(`#q${lvl}_${qi} .opt`).forEach((b, i) => {
      b.classList.add('disabled')
      if (i === q.a) b.classList.add('correct')
      else if (i === sel) b.classList.add('wrong')
    })
    const expEl = document.getElementById(`exp${lvl}_${qi}`)
    if (expEl) expEl.classList.add('show')
    if (Object.keys(QS[lvl].a).length === QUIZZES[lvl].length) finishQuiz(lvl)
  }, [updateGs, showToast])

  const finishQuiz = useCallback((lvl) => {
    QS[lvl].done = true
    const s = QS[lvl].score, total = QUIZZES[lvl].length, pct = Math.round(s / total * 100)
    const sc = document.getElementById('qs' + lvl)
    if (sc) sc.textContent = `Score: ${s}/${total} (${pct}%)`
    if (pct >= 70) {
      updateGs(prev => {
        if (prev.done.includes(lvl)) return prev
        const next = { ...prev, done: [...prev.done, lvl], xp: prev.xp + 100 }
        return next
      })
      setTimeout(() => showToast(`🏆 Level ${lvl} done! +100 XP 🎉`), 300)
      if (lvl < 10) {
        setTimeout(() => {
          if (confirm(`Level ${lvl} complete! Go to Level ${lvl + 1}?`)) setCurLevel(lvl + 1)
        }, 1500)
      } else {
        setTimeout(() => showToast('🌟 ALL 10 LEVELS COMPLETE! You are an AI expert!'), 500)
      }
    } else {
      showToast(`${pct}% — Need 70% to unlock next level`)
    }
  }, [updateGs, showToast])

  // Render level content
  useEffect(() => {
    const locked = curLevel > 1 && !gs.done.includes(curLevel - 1)
    const cnt = document.getElementById('cnt')
    if (!cnt) return
    if (locked) {
      cnt.innerHTML = `<div class="locked-pg"><div class="lock-icon">🔒</div><h2>Level ${curLevel} Locked</h2><p>Complete Level ${curLevel - 1} with ≥70% to unlock.</p></div>`
    } else {
      cnt.innerHTML = BUILDERS[curLevel]()
      if (CHARTFNS[curLevel]) CHARTFNS[curLevel]()
      cnt.scrollTo(0, 0)
      setTimeout(() => {
        if (curLevel === 1) { const ti = document.getElementById('tok-in'); if (ti) window._tokenize(ti.value) }
        if (curLevel === 2) window._roiCalc(10000)
        if (curLevel === 4) window._tempFx(0.7)
      }, 200)
    }
  }, [curLevel, gs.done])

  return (
    <>
      <Sidebar gs={gs} curLevel={curLevel} onSelect={setCurLevel} onToast={showToast} />
      <div id="main">
        <TopBar gs={gs} curLevel={curLevel} />
        <div id="cnt" ref={contentRef} />
      </div>
      <Toast message={toast} />
    </>
  )
}

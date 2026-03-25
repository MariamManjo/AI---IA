import React, { useState, useEffect, useRef, useCallback } from 'react'
import Sidebar from './components/Sidebar.jsx'
import TopBar from './components/TopBar.jsx'
import Toast from './components/Toast.jsx'
import { BUILDERS } from './levels/builders.js'
import { CHARTFNS } from './levels/charts.js'
import { QUIZZES } from './data/quizzes.js'
import { loadState, saveState, syncToServer } from './store/gameState.js'

const LEVEL_NAMES = ['AI Fundamentals','Predictive AI','Prompt Engineering','Hallucinations',
  'RAG Platforms','Agentic AI','Memory & Knowledge','Tool Use','Multi-step Agents','Deploy & Scale']

export default function App() {
  const QS = useRef({})
  const prevDoneRef = useRef([])
  const [gs, setGs] = useState(loadState)
  const [curLevel, setCurLevel] = useState(1)
  const [levelKey, setLevelKey] = useState(0)
  const [toast, setToast] = useState('')
  const [showCert, setShowCert] = useState(false)
  const toastKey = useRef(0)
  const contentRef = useRef(null)

  function initQ(id) {
    if (!QS.current[id]) QS.current[id] = { a: {}, score: 0, done: false }
  }

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

  // Register interactive window functions
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
    return () => { delete window._tokenize; delete window._tempFx; delete window._roiCalc }
  }, [])

  // Re-apply quiz DOM state after re-render
  function restoreQuizState(lvl) {
    const qs = QS.current[lvl]
    if (!qs) return
    Object.entries(qs.a).forEach(([qi, sel]) => {
      const q = QUIZZES[lvl][parseInt(qi)]
      if (!q) return
      document.querySelectorAll(`#q${lvl}_${qi} .opt`).forEach((b, i) => {
        b.classList.add('disabled')
        if (i === q.a) b.classList.add('correct')
        else if (i === parseInt(sel)) b.classList.add('wrong')
      })
      const expEl = document.getElementById(`exp${lvl}_${qi}`)
      if (expEl) expEl.classList.add('show')
    })
    if (!qs.done) return
    const total = QUIZZES[lvl].length
    const pct = Math.round(qs.score / total * 100)
    const sc = document.getElementById('qs' + lvl)
    if (sc) sc.textContent = `Score: ${qs.score}/${total} (${pct}%)`
    const btn = document.getElementById('qbtn' + lvl)
    const retryBtn = document.getElementById('qretry' + lvl)
    if (pct >= 70) {
      if (btn) {
        btn.removeAttribute('disabled')
        btn.textContent = lvl < 10 ? 'Next Level →' : '🎓 View Certificate'
        if (lvl < 10) btn.dataset.nextlvl = lvl + 1
        else btn.dataset.showcert = '1'
      }
    } else {
      if (btn) btn.textContent = `${pct}% — Need 70%`
      if (retryBtn) retryBtn.style.display = ''
    }
  }

  // Event delegation: quiz answers, retry, next level, certificate
  useEffect(() => {
    const cnt = contentRef.current
    if (!cnt) return
    const handler = (e) => {
      const opt = e.target.closest('.opt')
      if (opt) {
        pickAnswer(parseInt(opt.dataset.lvl), parseInt(opt.dataset.qi), parseInt(opt.dataset.sel))
        return
      }
      const retry = e.target.closest('[data-retry]')
      if (retry) {
        QS.current[parseInt(retry.dataset.retry)] = null
        setLevelKey(k => k + 1)
        return
      }
      const nextLvl = e.target.closest('[data-nextlvl]')
      if (nextLvl) { setCurLevel(parseInt(nextLvl.dataset.nextlvl)); return }
      const certBtn = e.target.closest('[data-showcert]')
      if (certBtn) { setShowCert(true) }
    }
    cnt.addEventListener('click', handler)
    return () => cnt.removeEventListener('click', handler)
  })

  const finishQuiz = useCallback((lvl) => {
    QS.current[lvl].done = true
    const s = QS.current[lvl].score, total = QUIZZES[lvl].length, pct = Math.round(s / total * 100)
    const sc = document.getElementById('qs' + lvl)
    if (sc) sc.textContent = `Score: ${s}/${total} (${pct}%)`
    const btn = document.getElementById('qbtn' + lvl)
    const retryBtn = document.getElementById('qretry' + lvl)
    if (pct >= 70) {
      updateGs(prev => {
        if (prev.done.includes(lvl)) return prev
        return { ...prev, done: [...prev.done, lvl], xp: prev.xp + 100 }
      })
      if (btn) {
        btn.removeAttribute('disabled')
        if (lvl < 10) { btn.textContent = 'Next Level →'; btn.dataset.nextlvl = lvl + 1 }
        else { btn.textContent = '🎓 View Certificate'; btn.dataset.showcert = '1' }
      }
      setTimeout(() => showToast(`🏆 Level ${lvl} done! +100 XP`), 300)
      if (lvl === 10) setTimeout(() => { showToast('🌟 ALL 10 LEVELS COMPLETE!'); setTimeout(() => setShowCert(true), 800) }, 500)
    } else {
      if (btn) btn.textContent = `${pct}% — Need 70%`
      if (retryBtn) retryBtn.style.display = ''
      showToast(`${pct}% — Need 70% to unlock next level`)
    }
  }, [updateGs, showToast])

  const pickAnswer = useCallback((lvl, qi, sel) => {
    initQ(lvl)
    if (QS.current[lvl]?.done || QS.current[lvl]?.a[qi] !== undefined) return
    const q = QUIZZES[lvl][qi]
    QS.current[lvl].a[qi] = sel
    const ok = sel === q.a
    if (ok) { updateGs(prev => ({ ...prev, xp: prev.xp + 10 })); QS.current[lvl].score++; showToast('✅ +10 XP') }
    else showToast('❌ Wrong — see explanation')
    document.querySelectorAll(`#q${lvl}_${qi} .opt`).forEach((b, i) => {
      b.classList.add('disabled')
      if (i === q.a) b.classList.add('correct')
      else if (i === sel) b.classList.add('wrong')
    })
    const expEl = document.getElementById(`exp${lvl}_${qi}`)
    if (expEl) expEl.classList.add('show')
    if (Object.keys(QS.current[lvl].a).length === QUIZZES[lvl].length) finishQuiz(lvl)
  }, [updateGs, showToast, finishQuiz])

  // Render level content — skip re-render when only current level was just added to done
  useEffect(() => {
    const locked = curLevel > 1 && !gs.done.includes(curLevel - 1)
    const cnt = document.getElementById('cnt')
    if (!cnt) return

    // If the only change is completing the current level, finishQuiz already updated DOM
    const prev = prevDoneRef.current
    prevDoneRef.current = gs.done
    const added = gs.done.filter(d => !prev.includes(d))
    if (added.length === 1 && added[0] === curLevel && !locked) return

    cnt.style.opacity = '0'
    const t = setTimeout(() => {
      if (locked) {
        cnt.innerHTML = `<div class="locked-pg"><div class="lock-icon">🔒</div><h2>Level ${curLevel} Locked</h2><p>Complete Level ${curLevel - 1} with ≥70% to unlock.</p></div>`
      } else {
        cnt.innerHTML = BUILDERS[curLevel]()
        try { if (CHARTFNS[curLevel]) CHARTFNS[curLevel]() } catch {}
        cnt.scrollTop = 0
        restoreQuizState(curLevel)
        setTimeout(() => {
          if (curLevel === 1) { const ti = document.getElementById('tok-in'); if (ti) window._tokenize(ti.value) }
          if (curLevel === 2) window._roiCalc(10000)
          if (curLevel === 4) window._tempFx(0.7)
        }, 200)
      }
      requestAnimationFrame(() => { cnt.style.opacity = '1' })
    }, 120)
    return () => clearTimeout(t)
  }, [curLevel, gs.done, levelKey])

  // Spawn confetti particles when certificate opens
  useEffect(() => {
    if (!showCert) return
    const el = document.getElementById('cert-confetti')
    if (!el) return
    const colors = ['#f59e0b','#f97316','#34d399','#60a5fa','#a78bfa','#fb7185','#fbbf24','#fff']
    el.innerHTML = Array.from({ length: 70 }, (_, i) => {
      const c = colors[i % colors.length]
      const x = Math.random() * 100, y = -10 - Math.random() * 20
      const s = 5 + Math.random() * 8
      const d = Math.random() * 2.5
      const spin = Math.random() > 0.5 ? 'circle' : 'square'
      return `<div class="conf-piece ${spin}" style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;background:${c};animation-delay:${d}s;animation-duration:${2 + Math.random() * 2}s"></div>`
    }).join('')
  }, [showCert])

  const certDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      <Sidebar gs={gs} curLevel={curLevel} onSelect={setCurLevel} onToast={showToast} />
      <div id="main">
        <TopBar gs={gs} curLevel={curLevel} />
        <div id="cnt" ref={contentRef} style={{ transition: 'opacity 0.15s ease' }} />
      </div>
      <Toast message={toast} />

      {showCert && (
        <div className="cert-overlay" onClick={() => setShowCert(false)}>
          <div id="cert-confetti" className="cert-confetti" />
          <div className="cert-modal" onClick={e => e.stopPropagation()}>
            <div className="cert-glow" />
            <div className="cert-stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <div className="cert-eyebrow">CERTIFICATE OF COMPLETION</div>
            <div className="cert-brand">⚡ AI Intelligence Academy</div>
            <div className="cert-rule" />
            <div className="cert-awarded-text">This certifies successful mastery of</div>
            <div className="cert-course-title">Artificial Intelligence</div>
            <div className="cert-course-sub">From Fundamentals to Production Deployment · 2026</div>
            <div className="cert-rule" />
            <div className="cert-skills">
              {LEVEL_NAMES.map((name, i) => (
                <div key={i} className="cert-skill">
                  <span className="cert-check">✓</span> {name}
                </div>
              ))}
            </div>
            <div className="cert-rule" />
            <div className="cert-stats-row">
              <div className="cert-stat"><div className="cert-stat-n">{gs.xp}</div><div className="cert-stat-l">Total XP</div></div>
              <div className="cert-stat"><div className="cert-stat-n">10/10</div><div className="cert-stat-l">Levels</div></div>
              <div className="cert-stat"><div className="cert-stat-n">100%</div><div className="cert-stat-l">Complete</div></div>
            </div>
            <div className="cert-date">Awarded on {certDate}</div>
            <button className="btn cert-btn" onClick={() => setShowCert(false)}>Close Certificate</button>
          </div>
        </div>
      )}
    </>
  )
}

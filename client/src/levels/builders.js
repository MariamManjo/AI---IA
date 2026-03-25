import { QUIZZES } from '../data/quizzes.js'
import { COLORS } from '../data/levels.js'

function qHTML(lvl) {
  const qs = QUIZZES[lvl]
  return `<div class="quiz">
  <div class="quiz-h">Knowledge Check</div>
  <div class="quiz-sub">5 questions · Score ≥70% to unlock next level</div>
  ${qs.map((q, i) => `
  <div class="q" id="q${lvl}_${i}">
    <div class="q-text"><span class="q-n">0${i + 1}</span>${q.q}</div>
    <div class="opts">${q.opts.map((o, j) => `<button class="opt" data-lvl="${lvl}" data-qi="${i}" data-sel="${j}">${['A','B','C','D'][j]}. ${o}</button>`).join('')}</div>
    <div class="exp" id="exp${lvl}_${i}">💡 ${q.exp}</div>
  </div>`).join('')}
  <div class="quiz-foot">
    <button class="btn" id="qbtn${lvl}" disabled>Answer all questions</button>
    <button class="btn btn-retry" id="qretry${lvl}" data-retry="${lvl}" style="display:none">↩ Try Again</button>
    <span class="q-score" id="qs${lvl}"></span>
  </div>
</div>`
}

export function L1() {
  return `
<div class="hero">
  <div class="hero-tag">Level 01 · AI Fundamentals</div>
  <h1>What is<br>Artificial Intelligence?</h1>
  <p class="hero-sub">75 years of breakthroughs — from Turing to reasoning models and autonomous agents.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">1950</div><div class="kpi-l">Turing Test</div></div>
    <div class="kpi"><div class="kpi-n">2017</div><div class="kpi-l">Transformer</div></div>
    <div class="kpi"><div class="kpi-n">400M</div><div class="kpi-l">ChatGPT weekly users</div></div>
    <div class="kpi"><div class="kpi-n">o3</div><div class="kpi-l">Top reasoning model</div></div>
    <div class="kpi"><div class="kpi-n">$320B</div><div class="kpi-l">AI invest 2025</div></div>
  </div>
</div>
<div class="vis-band vb3" style="margin-bottom:20px">
  <div class="vis-ani" style="background:linear-gradient(135deg,#050c1a,#0a1028);min-height:190px;position:relative;overflow:hidden;border-radius:16px;border:1px solid var(--border)">
    <canvas id="ai-particles-canvas" style="position:absolute;inset:0;width:100%;height:100%"></canvas>
    <div style="position:absolute;top:10px;left:10px;font-size:8px;font-weight:800;letter-spacing:2px;color:rgba(96,165,250,.9);text-transform:uppercase;background:rgba(96,165,250,.12);border:1px solid rgba(96,165,250,.3);padding:3px 8px;border-radius:6px">AI TODAY · 400M USERS</div>
  </div>
  <div class="vis-ani chess-vis-box" style="min-height:190px;position:relative;overflow:hidden;border-radius:16px;border:1px solid var(--border);background:#0e0905">
    <div class="chess-board-grid">
      ${Array.from({length:64},(_,i)=>{const r=Math.floor(i/8),c=i%8,light=(r+c)%2===0;const pieces={0:'♜',1:'♞',5:'♝',6:'♛',7:'♚',8:'♟',9:'♟',10:'♟',48:'♙',49:'♙',54:'♙',56:'♖',57:'♘',61:'♗',62:'♕',63:'♔'};return `<div class="chess-sq ${light?'cs-l':'cs-d'}" style="animation-delay:${(i%7)*.15}s">${pieces[i]||''}</div>`}).join('')}
    </div>
    <div style="position:absolute;top:8px;right:8px;background:rgba(0,0,0,.75);padding:4px 8px;border-radius:6px;font-size:8px;color:var(--green);font-family:monospace;letter-spacing:.5px;animation:chessThink 1s ease-in-out infinite;line-height:1.6">DEEP BLUE<br>COMPUTING...</div>
    <div style="position:absolute;bottom:8px;left:8px;font-size:8px;font-weight:800;letter-spacing:2px;color:rgba(245,158,11,.8);text-transform:uppercase;background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.2);padding:3px 8px;border-radius:6px">1997 · IBM CHESS</div>
  </div>
  <div class="vis-ani" style="min-height:190px;background:#060503;position:relative;overflow:hidden;border-radius:16px;border:1px solid var(--border);display:flex;flex-direction:column;align-items:center">
    <div style="font-size:8px;font-weight:800;letter-spacing:2px;color:rgba(245,158,11,.8);text-transform:uppercase;padding:10px 0 0;z-index:2">NEURAL NETWORK — LIVE</div>
    <canvas id="nn-live" style="position:absolute;top:28px;left:0;right:0;bottom:0;width:100%;height:calc(100% - 28px)"></canvas>
  </div>
</div>
<div class="g2">
<div class="c">
  <div class="c-label">History Timeline</div>
  <div class="tl">
    <div class="tl-row"><span class="tl-year">1950</span><div class="tl-dot big"></div><div class="tl-content"><div class="tt">Turing Test</div><div class="ts">Alan Turing — "Computing Machinery and Intelligence"</div></div></div>
    <div class="tl-row"><span class="tl-year">1956</span><div class="tl-dot"></div><div class="tl-content"><div class="tt">Dartmouth Conference</div><div class="ts">John McCarthy coins "Artificial Intelligence"</div></div></div>
    <div class="tl-row"><span class="tl-year">1986</span><div class="tl-dot"></div><div class="tl-content"><div class="tt">Backpropagation</div><div class="ts">Hinton, Rumelhart — neural nets can learn</div></div></div>
    <div class="tl-row"><span class="tl-year">1997</span><div class="tl-dot big"></div><div class="tl-content"><div class="tt">Deep Blue beats Kasparov</div><div class="ts">IBM chess computer defeats world champion</div></div></div>
    <div class="tl-row"><span class="tl-year">2012</span><div class="tl-dot big"></div><div class="tl-content"><div class="tt">AlexNet — Deep Learning Revolution</div><div class="ts">Krizhevsky & Hinton win ImageNet with GPU + CNN</div></div></div>
    <div class="tl-row"><span class="tl-year">2017</span><div class="tl-dot big"></div><div class="tl-content"><div class="tt">Transformer Architecture</div><div class="ts">"Attention Is All You Need" — Google Brain</div></div></div>
    <div class="tl-row"><span class="tl-year">2022</span><div class="tl-dot big"></div><div class="tl-content"><div class="tt">ChatGPT</div><div class="ts">100M users in 60 days — fastest ever consumer app</div></div></div>
    <div class="tl-row"><span class="tl-year">2025</span><div class="tl-dot big"></div><div class="tl-content"><div class="tt">Age of Agents</div><div class="ts">AI agents handle autonomous workflows end-to-end</div></div></div>
  </div>
</div>
<div style="display:flex;flex-direction:column;gap:16px">
  <div class="c"><div class="c-label">AI Investment Growth</div><div class="ch"><canvas id="c1a"></canvas></div></div>
  <div class="c"><div class="c-label">AI Landscape by Domain</div><div class="ch" style="height:200px"><canvas id="c1b"></canvas></div></div>
</div>
</div>
<div class="g3">
  <div class="c"><div class="c-label">Machine Learning</div><div class="c-title">Learn from Data</div><div class="c-sub">Feed labeled examples → model finds patterns. No explicit programming needed.</div></div>
  <div class="c"><div class="c-label">Deep Learning</div><div class="c-title">Many-layer Nets</div><div class="c-sub">Neural networks with 10–1000+ layers. "Deep" = depth of layers. Powers all LLMs.</div></div>
  <div class="c"><div class="c-label">Tokenization</div><div class="c-title">How Text Becomes Numbers</div><div class="c-sub">LLMs read tokens, not words. Each token = a subword piece mapped to an ID.</div></div>
</div>
<div class="g1 c">
  <div class="c-label">Live Tokenizer</div>
  <input class="tok-input" id="tok-in" value="Hello world! I love AI." oninput="window._tokenize(this.value)" placeholder="Type to tokenize...">
  <div class="token-stream" id="tok-out"></div>
  <div class="tok-meta" id="tok-meta"></div>
</div>
${qHTML(1)}`
}

export function L2() {
  return `
<div class="hero">
  <div class="hero-tag">Level 02 · Predictive AI & Business</div>
  <h1>AI That<br>Forecasts the Future</h1>
  <p class="hero-sub">From Netflix to hospital diagnostics — predictive AI drives trillions in value in 2025.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">$1B+</div><div class="kpi-l">Netflix saves/yr</div></div>
    <div class="kpi"><div class="kpi-n">78%</div><div class="kpi-l">Fortune 500 use AI</div></div>
    <div class="kpi"><div class="kpi-n">99%</div><div class="kpi-l">Fraud detect accuracy</div></div>
    <div class="kpi"><div class="kpi-n">$15.7T</div><div class="kpi-l">AI GDP impact 2030</div></div>
  </div>
</div>
<div class="g2">
<div class="c"><div class="c-label">Accuracy by Domain</div><div class="ch" style="height:280px"><canvas id="c2a"></canvas></div></div>
<div class="c">
  <div class="c-label">Business Cases</div>
  <div class="brand-row">
    ${[
      ['Netflix','Churn Prediction','$1B+ saved/year via retention AI','$1B+','#e50914','🎬'],
      ['Stripe','Fraud Detection','99%+ accuracy · <100ms per transaction','99%','#635bff','💳'],
      ['Amazon','Demand Forecast','30% reduction in stockouts','−30%','#ff9900','📦'],
      ['Spotify','Discover Weekly','40M+ listeners personalized weekly','40M+','#1db954','🎵']
    ].map(([c,t,s,stat,bg,icon]) => `
    <div class="brand-card">
      <div class="brand-photo" style="background:${bg}20;border:1.5px solid ${bg}40;display:flex;align-items:center;justify-content:center;font-size:26px;color:${bg}">${icon}</div>
      <div class="brand-text">
        <div class="brand-case">${t}</div>
        <div class="brand-name">${c}</div>
        <div class="brand-stat">${s}</div>
      </div>
      <div class="brand-pill">${stat}</div>
    </div>`).join('')}
  </div>
</div>
</div>
<div class="g1 c">
  <div class="c-label">ROI Calculator</div>
  <div class="slider-wrap">
    <label>Monthly volume: <strong style="color:var(--amber)" id="rv">10,000</strong> units</label>
    <input type="range" min="1000" max="100000" step="1000" value="10000" oninput="window._roiCalc(this.value)">
    <div class="slider-out" id="roi-out"></div>
  </div>
</div>
${qHTML(2)}`
}

export function L3() {
  return `
<div class="hero">
  <div class="hero-tag">Level 03 · Prompt Engineering</div>
  <h1>The Art of<br>Talking to AI</h1>
  <p class="hero-sub">Same model. Different prompt. Radically different results — now with vibe coding and o1/o3 reasoning.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">~$300K</div><div class="kpi-l">Prompt eng. salary</div></div>
    <div class="kpi"><div class="kpi-n">3×</div><div class="kpi-l">Quality gain</div></div>
    <div class="kpi"><div class="kpi-n">CoT</div><div class="kpi-l">Chain-of-Thought</div></div>
    <div class="kpi"><div class="kpi-n">2025</div><div class="kpi-l">Vibe coding era</div></div>
  </div>
</div>
<div class="g3">
  ${[['0️⃣','Zero-shot','No examples given','Relies on model knowledge alone','Core'],['🔢','Few-shot','2-5 examples provided','30-50% accuracy boost','Core'],['⛓️','Chain of Thought','Step-by-step reasoning','+30-70% on math & logic (Wei 2022)','Advanced'],['🌳','Tree of Thoughts','Branch + evaluate paths','70%→100% on logic puzzles (Yao 2023)','Advanced'],['🎭','RTF Framework','Role · Task · Format','Structured prompting for pros','Framework'],['⭐','COSTAR','Context·Objective·Style·Tone·Audience·Response','Singapore Gov. standard','Framework']].map(([ic,t,s,r,tag]) => `
  <div class="fw-card"><div class="fw-icon">${ic}</div><div class="fw-title">${t}</div><span class="fw-tag">${tag}</span><div class="fw-desc">${s}<br><strong style="color:var(--amber)">${r}</strong></div></div>`).join('')}
</div>
<div class="chat-compare">
  <div class="chat-box">
    <div class="chat-bar"><div class="chat-bar-dot red"></div>Zero-Shot Prompt</div>
    <div class="chat-msgs">
      <div class="cb u">What is 25% of 180?</div>
      <div class="cb a bad">The answer is <strong>25</strong>. ❌</div>
    </div>
    <div class="chat-label bad">No reasoning steps → wrong answer</div>
  </div>
  <div class="chat-box">
    <div class="chat-bar"><div class="chat-bar-dot"></div>Chain of Thought Prompt</div>
    <div class="chat-msgs">
      <div class="cb u">What is 25% of 180? Think step by step.</div>
      <div class="cb a good">1. 25% = 25/100 = 0.25<br>2. 0.25 × 180 = <strong>45 ✅</strong></div>
    </div>
    <div class="chat-label good">Step-by-step reasoning → correct answer</div>
  </div>
</div>
<div class="g2">
<div class="c"><div class="c-label">Technique Performance</div><div class="ch"><canvas id="c3a"></canvas></div></div>
<div class="c">
  <div class="c-label">Chain of Thought — Live Example</div>
  <div style="margin-bottom:12px;font-size:13px;color:var(--muted)">Without CoT: "5 + (2×3) balls?" → Model says <strong style="color:var(--coral)">5 ❌</strong></div>
  <div style="margin-bottom:8px;font-size:12px;color:var(--muted)">With "Let's think step by step":</div>
  <div style="display:flex;flex-direction:column;gap:8px">
    ${[['1','Roger starts with 5 balls'],['2','Buys 2 cans × 3 = 6 new balls'],['3','5 + 6 = 11 balls ✅']].map(([n,t]) => `
    <div style="display:flex;gap:10px;align-items:center"><div style="width:22px;height:22px;border-radius:6px;background:rgba(245,158,11,.2);color:var(--amber);font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${n}</div><div style="font-size:13px">${t}</div></div>`).join('')}
  </div>
  <div style="margin-top:16px;padding:14px;background:rgba(245,158,11,.06);border-radius:12px;border-left:3px solid var(--amber)">
    <div style="font-size:11px;color:var(--amber);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Multimodality</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      ${['📝 Text','🖼️ Images','🎵 Audio','💻 Code','📄 PDF'].map(m => `<span style="background:rgba(255,248,235,.05);border:1px solid var(--border);padding:4px 10px;border-radius:8px;font-size:12px;color:var(--muted)">${m}</span>`).join('')}
    </div>
  </div>
</div>
</div>
${qHTML(3)}`
}

export function L4() {
  return `
<div class="hero" style="background:linear-gradient(135deg,rgba(251,113,133,.12),rgba(249,115,22,.08),rgba(251,113,133,.06))">
  <div class="hero-tag" style="color:var(--coral)">Level 04 · AI Hallucinations</div>
  <h1>When AI<br>Makes Things Up</h1>
  <p class="hero-sub">Real cases, real harm — from Air Canada chatbot to fake court citations. Learn to stop them.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">~3%</div><div class="kpi-l">GPT-4o halluc. rate</div></div>
    <div class="kpi"><div class="kpi-n">2024</div><div class="kpi-l">Air Canada bot case</div></div>
    <div class="kpi"><div class="kpi-n">$5K</div><div class="kpi-l">Fine for AI cite</div></div>
    <div class="kpi"><div class="kpi-n">RAG</div><div class="kpi-l">Best fix method</div></div>
  </div>
</div>
<div class="case-row">
  <div class="case-card">
    <div class="case-photo">
      <img src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=500&q=70&fit=crop&h=130" alt="Courtroom" loading="lazy" onerror="this.parentElement.style.display='none'">
      <div class="case-badge badge-high">Real Case</div>
    </div>
    <div class="case-body">
      <div class="case-title">⚖️ Mata v. Avianca (2023)</div>
      <div class="case-desc">ChatGPT invented 6 fake court citations with real-sounding judge names. Lawyers fined <strong style="color:var(--coral)">$5,000</strong> and sanctioned by federal court.</div>
    </div>
  </div>
  <div class="case-card">
    <div class="case-photo">
      <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&q=70&fit=crop&h=130" alt="Medical" loading="lazy" onerror="this.parentElement.style.display='none'">
      <div class="case-badge badge-high">Medical Risk</div>
    </div>
    <div class="case-body">
      <div class="case-title">🏥 Medical Hallucinations</div>
      <div class="case-desc">GPT-3.5 hallucinated drug dosages in <strong style="color:var(--coral)">30%+</strong> of medical queries. Dangerous for clinical use without human verification.</div>
    </div>
  </div>
  <div class="case-card">
    <div class="case-photo">
      <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&q=70&fit=crop&h=130" alt="Airplane" loading="lazy" onerror="this.parentElement.style.display='none'">
      <div class="case-badge badge-med">Legal Ruling</div>
    </div>
    <div class="case-body">
      <div class="case-title">✈️ Air Canada Bot (2024)</div>
      <div class="case-desc">AI chatbot <strong>invented a bereavement refund policy</strong> that didn't exist. Customer sued. Air Canada lost in court — bot's word was legally binding.</div>
    </div>
  </div>
</div>
<div class="c g1" style="margin-bottom:20px">
  <div class="c-label">Hallucination vs Grounded Answer</div>
  <div style="font-size:12px;color:var(--muted);margin-bottom:10px;font-family:'SF Mono','Fira Code',monospace">Prompt: "Cite the legal case where AI chatbot invented a refund policy"</div>
  <div class="hd-label hd-bad">❌ Without RAG (hallucinating)</div>
  <div class="hd-text bad">"In Johnson v. TechCorp (2023), the California Supreme Court ruled... [fake case, fake court, fake ruling — all fabricated]"</div>
  <div class="hd-label hd-good">✅ With RAG (grounded)</div>
  <div class="hd-text good">"In <em>Moffatt v. Air Canada</em> (2024, BC Civil Resolution Tribunal), the court ruled Air Canada was bound by its chatbot's invented bereavement policy. [Source: CBC News, Feb 16 2024]"</div>
</div>
<div class="g2">
<div class="c">
  <div class="c-label">Hallucination Rate by Method</div>
  <div class="ch"><canvas id="c4a"></canvas></div>
</div>
<div class="c">
  <div class="c-label">Temperature Control</div>
  <div class="slider-wrap">
    <label>Temperature: <strong style="color:var(--amber)" id="tv">0.7</strong></label>
    <input type="range" min="0" max="2" step="0.1" value="0.7" oninput="window._tempFx(this.value)">
    <div class="slider-out" id="teff"></div>
  </div>
  <div style="margin-top:16px">
  <div class="c-label">RAG Pipeline</div>
  <div class="pipe">
    <div class="p-node accent">Query<small>User input</small></div><div class="p-arr">→</div>
    <div class="p-node purple">Embed<small>to vector</small></div><div class="p-arr">→</div>
    <div class="p-node">Search<small>vector DB</small></div><div class="p-arr">→</div>
    <div class="p-node accent">Retrieve<small>top-K docs</small></div><div class="p-arr">→</div>
    <div class="p-node purple">Augment<small>prompt</small></div><div class="p-arr">→</div>
    <div class="p-node green">Answer ✅</div>
  </div>
  </div>
</div>
</div>
${qHTML(4)}`
}

export function L5() {
  return `
<div class="hero">
  <div class="hero-tag">Level 05 · RAG Platforms</div>
  <h1>Retrieval-<br>Augmented Generation</h1>
  <p class="hero-sub">Give AI a memory. Connect it to your documents, databases, and the live web in real time.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">2020</div><div class="kpi-l">RAG paper (Meta)</div></div>
    <div class="kpi"><div class="kpi-n">$14B</div><div class="kpi-l">Perplexity valuation</div></div>
    <div class="kpi"><div class="kpi-n">3072</div><div class="kpi-l">OpenAI embed dims</div></div>
    <div class="kpi"><div class="kpi-n">256-1024</div><div class="kpi-l">Chunk size (tokens)</div></div>
  </div>
</div>
<div class="g1 c">
  <div class="c-label">Full RAG Architecture</div>
  <div style="margin-bottom:10px;font-size:11px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:1px">Indexing Phase (once)</div>
  <div class="pipe">
    <div class="p-node">Documents<small>PDF/HTML/TXT</small></div><div class="p-arr">→</div>
    <div class="p-node accent">Chunk<small>256-1024 tok</small></div><div class="p-arr">→</div>
    <div class="p-node purple">Embed<small>text-embedding</small></div><div class="p-arr">→</div>
    <div class="p-node green">Vector DB<small>Pinecone/Chroma</small></div>
  </div>
  <div style="margin:14px 0 10px;font-size:11px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:1px">Query Phase (real-time)</div>
  <div class="pipe">
    <div class="p-node accent">User Query</div><div class="p-arr">→</div>
    <div class="p-node purple">Embed Query</div><div class="p-arr">→</div>
    <div class="p-node">Cosine Search</div><div class="p-arr">→</div>
    <div class="p-node accent">Top-K Chunks</div><div class="p-arr">→</div>
    <div class="p-node purple">Augmented Prompt</div><div class="p-arr">→</div>
    <div class="p-node green">Cited Answer ✅</div>
  </div>
</div>
<div class="platform-grid" style="margin-bottom:20px">
  <div class="platform-card">
    <div class="platform-img" style="padding:0">
      <div class="plat-anim" style="background:#060c1c;flex-direction:column;align-items:stretch;padding:10px 12px;gap:4px">
        <div style="display:flex;align-items:center;gap:6px;background:rgba(96,165,250,.1);border:1px solid rgba(96,165,250,.25);border-radius:7px;padding:5px 8px;font-size:9px;font-family:monospace;color:#60a5fa">⚡ <span>What is RAG architecture?</span><span style="animation:termBlink 1s infinite;margin-left:2px">|</span></div>
        <div class="pp-r" style="animation-delay:.4s;display:flex;gap:5px;align-items:flex-start;animation:ppResultIn .4s .4s both"><span style="background:rgba(96,165,250,.2);color:#60a5fa;font-size:8px;font-weight:700;padding:1px 5px;border-radius:4px;flex-shrink:0">[1]</span><span style="color:#c4b5fd;font-size:9px">RAG combines document retrieval + LLM generation...</span></div>
        <div style="display:flex;gap:5px;align-items:flex-start;animation:ppResultIn .4s .9s both"><span style="background:rgba(96,165,250,.2);color:#60a5fa;font-size:8px;font-weight:700;padding:1px 5px;border-radius:4px;flex-shrink:0">[2]</span><span style="color:#c4b5fd;font-size:9px">Sources: arxiv.org · huggingface.co · openai.com</span></div>
        <div style="display:flex;gap:5px;animation:ppResultIn .4s 1.4s both;align-items:center"><span style="font-size:8px;color:#34d399;font-weight:700">✓ Cited</span><span style="font-size:8px;color:#9d8b6e;margin-left:4px">3 sources · 0.8s response</span></div>
      </div>
    </div>
    <div class="platform-body">
      <div class="platform-tag">Answer Engine · $14B Valuation</div>
      <div class="platform-name">Perplexity AI</div>
      <div class="platform-desc">Live web search + AI synthesis with source citations. 10M+ daily users. Rivals Google for research tasks.</div>
    </div>
  </div>
  <div class="platform-card">
    <div class="platform-img" style="padding:0">
      <div class="plat-anim" style="background:#051510;flex-direction:column;align-items:stretch;padding:10px 12px;gap:4px">
        <div style="background:rgba(52,211,153,.08);border:1px solid rgba(52,211,153,.2);border-radius:6px;padding:4px 8px;font-size:9px;color:#34d399;font-family:monospace">📄 AI_Research_2025.pdf — 147 pages</div>
        <div style="font-size:9px;color:#60a5fa">❓ What are the main findings?</div>
        <div style="height:2px;background:rgba(52,211,153,.1);border-radius:1px;overflow:hidden;margin:2px 0"><div style="height:100%;background:linear-gradient(90deg,transparent,#34d399,transparent);width:100%;animation:nlmScan 1.8s ease-in-out infinite"></div></div>
        <div style="animation:ppResultIn .4s 1.2s both;font-size:9px;color:var(--text)">📌 Model achieves 94.2% accuracy on benchmarks</div>
        <div style="animation:ppResultIn .4s 1.7s both;font-size:9px;color:#34d39988">⚠️ Grounded to doc — zero hallucination</div>
      </div>
    </div>
    <div class="platform-body">
      <div class="platform-tag">Google · Document-Grounded AI</div>
      <div class="platform-name">NotebookLM</div>
      <div class="platform-desc">Upload your PDFs → AI answers <em>only</em> from your content. Zero hallucinations within your documents.</div>
    </div>
  </div>
  <div class="platform-card">
    <div class="platform-img" style="padding:0">
      <div class="plat-anim" style="background:#0a1428;position:relative;overflow:hidden;min-height:90px">
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:48px;height:48px;background:rgba(96,165,250,.15);border:2px solid rgba(96,165,250,.4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 0 20px rgba(96,165,250,.3);z-index:2;animation:pulseGlow 2s infinite">💼</div>
        <div style="position:absolute;top:12%;left:12%;width:28px;height:28px;background:rgba(96,165,250,.1);border:1px solid rgba(96,165,250,.3);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;animation:gridPulse 2s 0s infinite">📧</div>
        <div style="position:absolute;top:12%;right:12%;width:28px;height:28px;background:rgba(96,165,250,.1);border:1px solid rgba(96,165,250,.3);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;animation:gridPulse 2s .4s infinite">👥</div>
        <div style="position:absolute;bottom:12%;left:12%;width:28px;height:28px;background:rgba(96,165,250,.1);border:1px solid rgba(96,165,250,.3);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;animation:gridPulse 2s .8s infinite">📁</div>
        <div style="position:absolute;bottom:12%;right:12%;width:28px;height:28px;background:rgba(96,165,250,.1);border:1px solid rgba(96,165,250,.3);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;animation:gridPulse 2s 1.2s infinite">📊</div>
        <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none"><line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgba(96,165,250,.25)" stroke-width="1.2" stroke-dasharray="3 3" style="animation:flow-pulse 1.4s infinite"/><line x1="50%" y1="50%" x2="80%" y2="20%" stroke="rgba(96,165,250,.25)" stroke-width="1.2" stroke-dasharray="3 3" style="animation:flow-pulse 1.4s .3s infinite"/><line x1="50%" y1="50%" x2="20%" y2="80%" stroke="rgba(96,165,250,.25)" stroke-width="1.2" stroke-dasharray="3 3" style="animation:flow-pulse 1.4s .6s infinite"/><line x1="50%" y1="50%" x2="80%" y2="80%" stroke="rgba(96,165,250,.25)" stroke-width="1.2" stroke-dasharray="3 3" style="animation:flow-pulse 1.4s .9s infinite"/></svg>
      </div>
    </div>
    <div class="platform-body">
      <div class="platform-tag">Microsoft · Enterprise</div>
      <div class="platform-name">Microsoft Copilot</div>
      <div class="platform-desc">Connects to SharePoint, Teams, emails. 300M enterprise users. RAG over your organization's data.</div>
    </div>
  </div>
  <div class="platform-card">
    <div class="platform-img" style="padding:0">
      <div class="plat-anim pla-term" style="align-items:flex-start">
        <div class="yc-terminal" style="width:100%">
          <div class="yc-line" style="animation-delay:.1s;color:#60a5fa">$ search(q="AI agents 2025", models=2)</div>
          <div class="yc-line" style="animation-delay:.7s;color:#34d399">✓ 2 models · 1.2M results · 0.3s</div>
          <div class="yc-line" style="animation-delay:1.2s;color:#9d8b6e">[1] "Agentic AI is the frontier..."</div>
          <div class="yc-line" style="animation-delay:1.7s;color:#9d8b6e">[2] "Multi-agent in production..."</div>
          <div class="yc-line" style="animation-delay:2.1s"><span class="yc-cursor"></span></div>
        </div>
      </div>
    </div>
    <div class="platform-body">
      <div class="platform-tag">Search · Developer API</div>
      <div class="platform-name">You.com</div>
      <div class="platform-desc">Multi-model AI search with citations and a developer-friendly RAG API for building your own tools.</div>
    </div>
  </div>
</div>
<div class="g2">
<div class="c"><div class="c-label">RAG vs Fine-tuning vs Base LLM</div><div class="ch"><canvas id="c5a"></canvas></div></div>
<div class="c">
  <div class="c-label">Real RAG Platforms</div>
  <div style="display:flex;flex-direction:column;gap:10px">
    ${[['Perplexity AI','Answer engine · cites live web sources · 10M DAU · $9B val.'],['Google NotebookLM','Upload PDFs → AI answers only from your docs. Zero hallucinations.'],['Microsoft Copilot','Connects to your SharePoint, Teams, emails. 300M enterprise users.'],['You.com','Multi-model search with citations. Developer-friendly API.']].map(([n,d]) => `
    <div style="padding:14px;background:rgba(255,248,235,.03);border:1px solid var(--border);border-radius:12px">
      <div style="font-size:13px;font-weight:700;color:var(--amber);margin-bottom:3px">${n}</div>
      <div style="font-size:12px;color:var(--muted)">${d}</div>
    </div>`).join('')}
  </div>
</div>
</div>
${qHTML(5)}`
}

export function L6() {
  return `
<div class="hero">
  <div class="hero-tag">Level 06 · Agentic AI</div>
  <h1>From Chatbot<br>to Agent</h1>
  <p class="hero-sub">Agents plan, act, observe, and iterate. In 2025 they browse, code, and run businesses autonomously.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">ReAct</div><div class="kpi-l">Core framework</div></div>
    <div class="kpi"><div class="kpi-n">2024</div><div class="kpi-l">Claude Computer Use</div></div>
    <div class="kpi"><div class="kpi-n">2025</div><div class="kpi-l">OpenAI Operator</div></div>
    <div class="kpi"><div class="kpi-n">$3B</div><div class="kpi-l">Devin valuation</div></div>
  </div>
</div>
<div class="g1 c">
  <div class="c-label">The Agent Loop — ReAct Framework</div>
  <div class="agent-loop">
    <div class="al-step"><div class="al-num">1</div><div><div class="al-t">Perceive</div><div class="al-s">Receive input · user request · tool results · environment state</div></div></div>
    <div class="al-step"><div class="al-num">2</div><div><div class="al-t">Reason</div><div class="al-s">Think: what do I know? what do I need? what's next?</div></div></div>
    <div class="al-step"><div class="al-num">3</div><div><div class="al-t">Act</div><div class="al-s">Call a tool: search · code · API · database · browser</div></div></div>
    <div class="al-step"><div class="al-num">4</div><div><div class="al-t">Observe → Loop</div><div class="al-s">Receive result · update state · reason again until goal met</div></div></div>
  </div>
</div>
<div class="g2">
<div class="c">
  <div class="c-label">Agent Capabilities Over Time</div>
  <div class="ch"><canvas id="c6a"></canvas></div>
</div>
<div class="c">
  <div class="c-label">Chatbot vs Assistant vs Agent</div>
  <table class="ctbl">
    <tr><th>Feature</th><th>Chatbot</th><th>Assistant</th><th>Agent</th></tr>
    <tr><td>Memory</td><td>None</td><td>Session</td><td><span class="pill g">Persistent</span></td></tr>
    <tr><td>Tools</td><td>None</td><td>Limited</td><td><span class="pill g">Full suite</span></td></tr>
    <tr><td>Goals</td><td>Reactive</td><td>Somewhat</td><td><span class="pill g">Proactive</span></td></tr>
    <tr><td>Example</td><td>FAQ bot</td><td>ChatGPT</td><td>Devin · Operator</td></tr>
  </table>
  <div style="margin-top:16px">
  <div class="c-label">Real Products (2024–25)</div>
  <div style="display:flex;flex-direction:column;gap:8px">
    ${[
      ['#f59e0b','⚡','Anthropic','Claude Computer Use','Sees your screen · clicks · types · operates computer autonomously. Released Oct 2024.'],
      ['#10b981','🤖','OpenAI','Operator (Jan 2025)','Browses web, fills forms, books appointments. First commercial AI agent product.'],
      ['#6366f1','💻','Cognition','Devin AI','Full AI software engineer — reads issues, writes code, deploys. $3B valuation.']
    ].map(([bg,icon,co,n,d]) => `
    <div style="display:flex;gap:10px;align-items:center;padding:10px;background:rgba(255,248,235,.03);border:1px solid var(--border);border-radius:12px;transition:border-color .2s" onmouseover="this.style.borderColor='var(--border2)'" onmouseout="this.style.borderColor='var(--border)'">
      <div style="width:44px;height:44px;border-radius:10px;flex-shrink:0;background:${bg}22;border:1.5px solid ${bg}44;display:flex;align-items:center;justify-content:center;font-size:20px">${icon}</div>
      <div><div style="font-size:10px;font-weight:700;color:var(--amber);letter-spacing:.8px;text-transform:uppercase">${co}</div><div style="font-size:12px;font-weight:700;color:var(--text)">${n}</div><div style="font-size:11px;color:var(--muted)">${d}</div></div>
    </div>`).join('')}
  </div>
  </div>
</div>
</div>
${qHTML(6)}`
}

export function L7() {
  return `
<div class="hero">
  <div class="hero-tag">Level 07 · Memory & Knowledge</div>
  <h1>How AI<br>Agents Remember</h1>
  <p class="hero-sub">Vector databases, embeddings, and knowledge graphs power AI memory at scale in 2025.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">3072</div><div class="kpi-l">OpenAI embed dims</div></div>
    <div class="kpi"><div class="kpi-n">1M</div><div class="kpi-l">Gemini 1.5 context</div></div>
    <div class="kpi"><div class="kpi-n">~ms</div><div class="kpi-l">Vector search latency</div></div>
    <div class="kpi"><div class="kpi-n">∞</div><div class="kpi-l">External memory size</div></div>
  </div>
</div>
<div class="vis-band" style="grid-template-columns:1fr 1fr 1fr;margin-bottom:20px">
  <div class="vis-ani" style="min-height:190px;background:linear-gradient(135deg,#1a0a1e,#0f0a1a);position:relative;overflow:hidden;border-radius:16px;border:1px solid var(--border)">
    <canvas id="neuron-canvas" style="position:absolute;inset:0;width:100%;height:100%"></canvas>
    <div style="position:absolute;top:8px;left:8px;font-size:8px;font-weight:800;letter-spacing:1.5px;color:rgba(167,139,250,.9);text-transform:uppercase;background:rgba(167,139,250,.12);border:1px solid rgba(167,139,250,.25);padding:3px 8px;border-radius:6px">BIOLOGICAL MEMORY</div>
  </div>
  <div class="vis-ani" style="min-height:190px;background:#050d18;position:relative;overflow:hidden;border-radius:16px;border:1px solid var(--border)">
    <canvas id="vector-canvas" style="position:absolute;inset:0;width:100%;height:100%"></canvas>
    <div style="position:absolute;top:8px;left:8px;font-size:8px;font-weight:800;letter-spacing:1.5px;color:rgba(96,165,250,.9);text-transform:uppercase;background:rgba(96,165,250,.12);border:1px solid rgba(96,165,250,.25);padding:3px 8px;border-radius:6px">VECTOR SPACE</div>
  </div>
  <div class="c" style="display:flex;flex-direction:column;justify-content:center;gap:8px;padding:18px">
    <div style="font-size:10px;font-weight:700;color:var(--amber);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">Embedding Similarity</div>
    ${[['king','#f59e0b',92],['queen','#f97316',88],['prince','#a78bfa',71],['banana','#9d8b6e',12]].map(([w,c,pct]) => `
    <div style="display:flex;align-items:center;gap:8px">
      <span style="font-size:11px;font-weight:700;color:${c};width:56px">"${w}"</span>
      <div style="flex:1;height:6px;background:rgba(255,248,235,.07);border-radius:3px;overflow:hidden">
        <div style="height:100%;width:${pct}%;background:${c};border-radius:3px;transition:width .8s"></div>
      </div>
      <span style="font-size:10px;color:var(--muted);width:32px;text-align:right">${pct}%</span>
    </div>`).join('')}
    <div style="font-size:10px;color:var(--dim);margin-top:4px">Similarity to "king" in vector space</div>
  </div>
</div>
<div class="g3">
  ${[['⚡','In-Context','Conversation window','RAM — fast, temporary, limited to 128K-200K tokens'],['🗄️','External','Vector DB','Hard drive — persistent, unlimited, semantic search'],['📖','Episodic','Past interactions log','What happened — enables personalization across sessions'],['🔬','Semantic','Training knowledge','World facts baked into weights — updated only by retraining'],['🛠️','Procedural','Skills & tasks','How to do things — also in weights, very stable'],['🌐','Knowledge Graph','Entity relationships','Paris → capital of → France. Precise, structured, explicit']].map(([ic,t,tag,d]) => `
  <div class="mem-card"><div class="mem-icon">${ic}</div><div class="mem-title">${t}</div><span class="mem-badge">${tag}</span><div class="mem-desc">${d}</div></div>`).join('')}
</div>
<div class="g2">
<div class="c"><div class="c-label">Vector DB Comparison</div><div class="ch"><canvas id="c7a"></canvas></div></div>
<div class="c">
  <div class="c-label">How Embeddings Work</div>
  <div style="display:flex;flex-direction:column;gap:8px;font-family:'SF Mono','Fira Code',monospace;font-size:12px;margin-bottom:16px">
    ${[['king','#f59e0b','[0.82, -0.31, 0.65, ... 1536d]'],['queen','#f97316','[0.79, 0.28, 0.61, ... 1536d]'],['banana','#9d8b6e','[-0.42, 0.88, -0.23, ... 1536d]']].map(([w,c,v]) => `
    <div style="display:flex;align-items:center;gap:10px"><span style="color:${c};width:60px;font-weight:700">"${w}"</span><span style="color:var(--dim)">→</span><span style="color:var(--muted)">${v}</span></div>`).join('')}
  </div>
  <div style="background:rgba(245,158,11,.06);border:1px solid var(--border);border-radius:12px;padding:14px">
    <div style="font-size:13px;font-weight:700;color:var(--amber);margin-bottom:6px">king − man + woman ≈ queen</div>
    <div style="font-size:12px;color:var(--muted)">Vector arithmetic captures semantic relationships. Similar meanings cluster together in high-dimensional space.</div>
  </div>
  <div style="margin-top:16px">
  <table class="ctbl">
    <tr><th>Database</th><th>Type</th><th>Free?</th></tr>
    <tr><td>Pinecone</td><td>Managed cloud</td><td><span class="pill a">Free tier</span></td></tr>
    <tr><td>Chroma</td><td>Local/open source</td><td><span class="pill g">Free</span></td></tr>
    <tr><td>Qdrant</td><td>High perf, Rust</td><td><span class="pill g">Free/cloud</span></td></tr>
    <tr><td>pgvector</td><td>Postgres ext.</td><td><span class="pill g">Free</span></td></tr>
  </table>
  </div>
</div>
</div>
${qHTML(7)}`
}

export function L8() {
  return `
<div class="hero">
  <div class="hero-tag">Level 08 · Tool Use & Function Calling</div>
  <h1>Giving AI<br>Hands</h1>
  <p class="hero-sub">MCP, function calling, and tool ecosystems let LLMs act — not just respond — in 2025.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">2023</div><div class="kpi-l">OpenAI func. calling</div></div>
    <div class="kpi"><div class="kpi-n">Nov 2024</div><div class="kpi-l">MCP by Anthropic</div></div>
    <div class="kpi"><div class="kpi-n">1000+</div><div class="kpi-l">MCP connectors</div></div>
    <div class="kpi"><div class="kpi-n">JSON</div><div class="kpi-l">Standard format</div></div>
  </div>
</div>
<div class="g2">
<div class="c">
  <div class="c-label">Tool Call Lifecycle — Step by Step</div>
  <div class="tool-flow">
    <div class="tf-step">
      <div class="tf-num">1</div><div class="tf-icon">👤</div>
      <div><div class="tf-label">User sends message</div><div class="tf-val">"What's the weather in Tbilisi?"</div></div>
    </div>
    <div class="tf-arr">↓</div>
    <div class="tf-step">
      <div class="tf-num">2</div><div class="tf-icon">🧠</div>
      <div><div class="tf-label">Model reasons</div><div class="tf-val tf-blue">Needs live data → call <code>get_weather</code></div></div>
    </div>
    <div class="tf-arr">↓</div>
    <div class="tf-step">
      <div class="tf-num">3</div><div class="tf-icon">📤</div>
      <div><div class="tf-label">Tool call emitted</div><div class="tf-val" style="font-size:10px">{ <span style="color:var(--amber)">"name"</span>: <span style="color:var(--green)">"get_weather"</span>, <span style="color:var(--amber)">"city"</span>: <span style="color:var(--green)">"Tbilisi"</span> }</div></div>
    </div>
    <div class="tf-arr">↓</div>
    <div class="tf-step">
      <div class="tf-num">4</div><div class="tf-icon">⚙️</div>
      <div><div class="tf-label">External tool executes</div><div class="tf-val tf-purple">API responds: temp=18°C, "Partly cloudy"</div></div>
    </div>
    <div class="tf-arr">↓</div>
    <div class="tf-step">
      <div class="tf-num">5</div><div class="tf-icon">✅</div>
      <div><div class="tf-label tf-ok">Final answer to user</div><div class="tf-val">"It's 18°C and partly cloudy in Tbilisi."</div></div>
    </div>
  </div>
  <div class="code" style="margin-top:14px;font-size:10px"><span class="cm">// Step 3 raw JSON:</span>
{ <span class="str">"type"</span>: <span class="str">"tool_use"</span>, <span class="str">"name"</span>: <span class="str">"get_weather"</span>,
  <span class="str">"input"</span>: { <span class="str">"city"</span>: <span class="str">"Tbilisi"</span> } }
<span class="cm">// Step 4 result returned:</span>
{ <span class="str">"temp"</span>: <span class="num">18</span>, <span class="str">"condition"</span>: <span class="str">"Partly cloudy"</span> }</div>
</div>
<div style="display:flex;flex-direction:column;gap:16px">
  <div class="c">
    <div class="c-label">MCP — Model Context Protocol</div>
    <div style="font-size:13px;color:var(--muted);margin-bottom:14px">Like USB-C for AI. One standard to connect any model to any tool.</div>
    <div class="pipe" style="flex-wrap:wrap;gap:8px">
      <div class="p-node accent">Claude/GPT<small>MCP Client</small></div>
      <div class="p-arr">⇄</div>
      <div class="p-node purple">MCP Protocol<small>Standardized</small></div>
      <div class="p-arr">⇄</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <div class="p-node green" style="font-size:11px;padding:6px 10px">GitHub</div>
        <div class="p-node green" style="font-size:11px;padding:6px 10px">Slack</div>
        <div class="p-node green" style="font-size:11px;padding:6px 10px">Database</div>
      </div>
    </div>
  </div>
  <div class="c"><div class="c-label">Tool Usage Distribution</div><div class="ch" style="height:180px"><canvas id="c8a"></canvas></div></div>
</div>
</div>
<div class="c g1" style="margin-bottom:20px">
  <div class="c-label">MCP Tool Ecosystem (1000+ connectors)</div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:8px">
    ${[['🐙','GitHub','Code · PRs · Issues'],['💬','Slack','Messages · Channels'],['🗄️','Databases','SQL · Postgres · Mongo'],['🔍','Web Search','Brave · Google'],['📧','Email','Gmail · Outlook'],['📊','Analytics','Sheets · Looker'],['🗂️','Files','Drive · S3 · Dropbox'],['💳','Payments','Stripe · PayPal']].map(([ic,n,d]) => `
    <div style="background:rgba(255,248,235,.03);border:1px solid var(--border);border-radius:12px;padding:12px;text-align:center;transition:all .2s;cursor:default" onmouseover="this.style.borderColor='var(--amber)';this.style.background='rgba(245,158,11,.05)'" onmouseout="this.style.borderColor='var(--border)';this.style.background='rgba(255,248,235,.03)'">
      <div style="font-size:24px;margin-bottom:6px">${ic}</div>
      <div style="font-size:11px;font-weight:700;color:var(--text);margin-bottom:2px">${n}</div>
      <div style="font-size:10px;color:var(--muted)">${d}</div>
    </div>`).join('')}
  </div>
</div>
${qHTML(8)}`
}

export function L9() {
  return `
<div class="hero">
  <div class="hero-tag">Level 09 · Multi-step Agents</div>
  <h1>Autonomous<br>Pipelines</h1>
  <p class="hero-sub">Chain steps, handle failures, coordinate teams of agents — multi-agent is production-ready in 2025.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">LangGraph</div><div class="kpi-l">Top framework</div></div>
    <div class="kpi"><div class="kpi-n">Reflexion</div><div class="kpi-l">Self-correction</div></div>
    <div class="kpi"><div class="kpi-n">2025</div><div class="kpi-l">Multi-agent standard</div></div>
    <div class="kpi"><div class="kpi-n">n8n</div><div class="kpi-l">Visual builder</div></div>
  </div>
</div>
<div class="g2">
<div class="c">
  <div class="c-label">Research Agent Pipeline</div>
  <div style="display:flex;flex-direction:column;gap:8px">
    ${[['🔍','Search','Web search agent queries 5+ sources','var(--amber)'],['📖','Read & Extract','Reader agent processes each article','var(--orange)'],['✍️','Write Draft','Writer agent synthesizes into report','var(--coral)'],['✅','Fact-Check','Critic agent verifies all claims','var(--green)'],['🔁','Self-Correct','Loop back if issues found','var(--blue)'],['📄','Format & Send','Output PDF with citations','var(--purple)']].map(([ic,t,d,c]) => `
    <div style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(255,248,235,.03);border-left:3px solid ${c};border-radius:0 12px 12px 0">
      <span style="font-size:18px;flex-shrink:0">${ic}</span>
      <div><div style="font-size:13px;font-weight:700;color:var(--text)">${t}</div><div style="font-size:11px;color:var(--muted)">${d}</div></div>
    </div>`).join('')}
  </div>
</div>
<div style="display:flex;flex-direction:column;gap:16px">
  <div class="c">
    <div class="c-label">Frameworks Comparison</div>
    <div class="ch" style="height:200px"><canvas id="c9a"></canvas></div>
  </div>
  <div class="c">
    <div class="c-label">Self-Correction Loop (Reflexion)</div>
    <div class="code"><span class="kw">for</span> attempt <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>):
  output = agent.<span class="fn">generate</span>(task)
  score = eval.<span class="fn">score</span>(output)
  <span class="kw">if</span> score >= <span class="num">0.8</span>: <span class="kw">return</span> output
  task += agent.<span class="fn">reflect</span>(output)</div>
  </div>
</div>
</div>
${qHTML(9)}`
}

export function L10() {
  return `
<div class="hero" style="background:linear-gradient(135deg,rgba(167,139,250,.12),rgba(245,158,11,.08),rgba(249,115,22,.06))">
  <div class="hero-tag">Level 10 · Deploy, Secure & Scale</div>
  <h1>Production<br>AI Systems</h1>
  <p class="hero-sub">Ship production AI in 2025 — Vercel, Render, prompt caching, guardrails, and cost control.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">#1</div><div class="kpi-l">Prompt injection risk</div></div>
    <div class="kpi"><div class="kpi-n">90%</div><div class="kpi-l">Cost cut w/ caching</div></div>
    <div class="kpi"><div class="kpi-n">2B+</div><div class="kpi-l">WhatsApp users</div></div>
    <div class="kpi"><div class="kpi-n">$0.15</div><div class="kpi-l">GPT-4o/1M tokens</div></div>
  </div>
</div>
<div class="vis-band" style="grid-template-columns:1fr 1fr 1fr;margin-bottom:20px">
  <div class="vis-photo">
    <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&q=70&fit=crop&h=200" alt="Security" loading="lazy" onerror="this.parentElement.style.display='none'">
    <div class="vis-photo-tag">OWASP LLM Top 10</div>
  </div>
  <div class="vis-photo chat-vis" style="flex-direction:column;justify-content:flex-start;gap:0;padding:0">
    <div class="cv-inner">
      <div class="cv-header">
        <div class="cv-avatar">🤖</div>
        <div><div class="cv-hname">AI Assistant</div><div class="cv-online">● online · powered by LLM</div></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:5px">
        <div class="cv-msg user" style="animation-delay:.2s">Track my order #12345</div>
        <div class="cv-msg bot" style="animation-delay:.6s">📦 Your order shipped! Estimated delivery: Wednesday.</div>
        <div class="cv-msg user" style="animation-delay:1s">Can I change the delivery address?</div>
        <div class="cv-msg bot" style="animation-delay:1.4s">✅ Address updated! Confirmation sent to your email.</div>
        <div class="cv-msg bot cv-typing" style="animation-delay:1.8s"><span></span><span></span><span></span></div>
      </div>
    </div>
    <div class="vis-photo-tag" style="position:absolute;top:10px;left:10px">2B+ Users</div>
    <div class="vis-photo-cap">WhatsApp chatbot deployment — webhook + LLM + Business API</div>
  </div>
  <div class="vis-photo">
    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=70&fit=crop&h=200" alt="Data Center" loading="lazy" onerror="this.parentElement.style.display='none'">
    <div class="vis-photo-tag">Production Scale</div>
  </div>
</div>
<div class="g3">
  ${[['⚠️','Prompt Injection','Malicious input overrides system prompt. OWASP LLM #1 risk.','var(--coral)'],['🔐','Data Leakage','Private docs exposed via RAG or verbatim reproduction.','var(--orange)'],['🛡️','Insecure Plugins','Broad permissions let agents take unintended actions.','var(--amber)']].map(([ic,t,d,c]) => `
  <div class="c" style="border-top:3px solid ${c}">
    <div style="font-size:28px;margin-bottom:10px">${ic}</div>
    <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:6px">${t}</div>
    <div style="font-size:12px;color:var(--muted)">${d}</div>
  </div>`).join('')}
</div>
<div class="g2">
<div class="c">
  <div class="c-label">Model Cost vs Capability</div>
  <div class="ch"><canvas id="c10a"></canvas></div>
</div>
<div style="display:flex;flex-direction:column;gap:16px">
  <div class="c">
    <div class="c-label">Cost Control Strategies</div>
    <table class="ctbl">
      <tr><th>Strategy</th><th>Saving</th></tr>
      <tr><td>Model routing (mini for simple)</td><td><span class="pill g">60-90%</span></td></tr>
      <tr><td>Prompt caching</td><td><span class="pill g">Up to 90%</span></td></tr>
      <tr><td>Batch API</td><td><span class="pill g">50% discount</span></td></tr>
      <tr><td>Output compression</td><td><span class="pill a">30-50%</span></td></tr>
    </table>
  </div>
  <div class="c">
    <div class="c-label">WhatsApp Bot Architecture</div>
    <div class="pipe" style="flex-wrap:wrap;gap:8px">
      <div class="p-node accent">User msg<small>WhatsApp</small></div>
      <div class="p-arr">→</div>
      <div class="p-node">Webhook<small>HTTP POST</small></div>
      <div class="p-arr">→</div>
      <div class="p-node purple">Backend<small>Node/Python</small></div>
      <div class="p-arr">→</div>
      <div class="p-node accent">LLM API</div>
      <div class="p-arr">→</div>
      <div class="p-node green">Reply ✅</div>
    </div>
  </div>
</div>
</div>
<div class="g1 c" style="background:linear-gradient(135deg,rgba(52,211,153,.08),rgba(245,158,11,.06));border-color:rgba(52,211,153,.3);text-align:center;padding:40px">
  <div style="font-size:48px;margin-bottom:16px">🎓</div>
  <div style="font-family:'Orbitron',sans-serif;font-size:22px;font-weight:900;margin-bottom:10px">All 10 Levels Complete</div>
  <div style="font-size:14px;color:var(--muted);max-width:400px;margin:0 auto">You understand AI fundamentals through production deployment. You are ready to build, deploy, and scale real AI systems.</div>
</div>
${qHTML(10)}`
}

export const BUILDERS = [null, L1, L2, L3, L4, L5, L6, L7, L8, L9, L10]

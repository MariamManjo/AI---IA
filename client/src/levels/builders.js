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
    <button class="btn" disabled>Submitted</button>
    <span class="q-score" id="qs${lvl}">Answer all questions</span>
  </div>
</div>`
}

export function L1() {
  return `
<div class="hero">
  <div class="hero-tag">Level 01 · AI Fundamentals</div>
  <h1>What is<br>Artificial Intelligence?</h1>
  <p class="hero-sub">75 years of history. From Turing to GPT-4o.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">1950</div><div class="kpi-l">Turing Test</div></div>
    <div class="kpi"><div class="kpi-n">2017</div><div class="kpi-l">Transformer</div></div>
    <div class="kpi"><div class="kpi-n">100M</div><div class="kpi-l">ChatGPT in 60 days</div></div>
    <div class="kpi"><div class="kpi-n">1.76T</div><div class="kpi-l">GPT-4 params</div></div>
    <div class="kpi"><div class="kpi-n">$185B</div><div class="kpi-l">AI invest 2024</div></div>
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
  <p class="hero-sub">From Netflix to Georgian banks — predictive AI drives billions in value.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">$1B+</div><div class="kpi-l">Netflix saves/yr</div></div>
    <div class="kpi"><div class="kpi-n">80%</div><div class="kpi-l">Content from recs</div></div>
    <div class="kpi"><div class="kpi-n">99%</div><div class="kpi-l">Fraud detect accuracy</div></div>
    <div class="kpi"><div class="kpi-n">$4.4T</div><div class="kpi-l">AI potential/yr</div></div>
  </div>
</div>
<div class="g2">
<div class="c"><div class="c-label">Accuracy by Domain</div><div class="ch" style="height:280px"><canvas id="c2a"></canvas></div></div>
<div class="c">
  <div class="c-label">Business Cases</div>
  <div style="display:flex;flex-direction:column;gap:12px">
    ${[['Netflix','Churn Prediction','$1B+ saved/year via retention AI'],['Stripe','Fraud Detection','99%+ accuracy · <100ms per transaction'],['Amazon','Demand Forecasting','30% reduction in stockouts'],['Georgian Banks','AI Credit Scoring','3× faster loan decisions (TBC, BoG)'],['Spotify','Discover Weekly','40M+ listeners personalized weekly']].map(([c,t,s]) => `
    <div style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(255,248,235,.03);border-radius:12px;border:1px solid var(--border)">
      <div style="width:8px;height:8px;border-radius:50%;background:var(--amber);flex-shrink:0"></div>
      <div style="flex:1"><div style="font-size:13px;font-weight:700;color:var(--text)">${c} — ${t}</div><div style="font-size:11px;color:var(--muted);margin-top:2px">${s}</div></div>
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
  <p class="hero-sub">Same model. Different prompt. Radically different results.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">~$300K</div><div class="kpi-l">Prompt eng. salary</div></div>
    <div class="kpi"><div class="kpi-n">3×</div><div class="kpi-l">Quality gain</div></div>
    <div class="kpi"><div class="kpi-n">2022</div><div class="kpi-l">CoT published</div></div>
    <div class="kpi"><div class="kpi-n">2023</div><div class="kpi-l">ToT published</div></div>
  </div>
</div>
<div class="g3">
  ${[['0️⃣','Zero-shot','No examples given','Relies on model knowledge alone','Core'],['🔢','Few-shot','2-5 examples provided','30-50% accuracy boost','Core'],['⛓️','Chain of Thought','Step-by-step reasoning','+30-70% on math & logic (Wei 2022)','Advanced'],['🌳','Tree of Thoughts','Branch + evaluate paths','70%→100% on logic puzzles (Yao 2023)','Advanced'],['🎭','RTF Framework','Role · Task · Format','Structured prompting for pros','Framework'],['⭐','COSTAR','Context·Objective·Style·Tone·Audience·Response','Singapore Gov. standard','Framework']].map(([ic,t,s,r,tag]) => `
  <div class="fw-card"><div class="fw-icon">${ic}</div><div class="fw-title">${t}</div><span class="fw-tag">${tag}</span><div class="fw-desc">${s}<br><strong style="color:var(--amber)">${r}</strong></div></div>`).join('')}
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
  <p class="hero-sub">Real cases, real harm. Learn what causes hallucinations and how to stop them.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">~22%</div><div class="kpi-l">GPT-3 halluc. rate</div></div>
    <div class="kpi"><div class="kpi-n">2023</div><div class="kpi-l">Mata v. Avianca case</div></div>
    <div class="kpi"><div class="kpi-n">$5K</div><div class="kpi-l">Fine for AI cite</div></div>
    <div class="kpi"><div class="kpi-n">RAG</div><div class="kpi-l">Best fix method</div></div>
  </div>
</div>
<div class="g3">
  ${[['⚖️','Mata v. Avianca (2023)','ChatGPT invented 6 case citations. Lawyers fined $5,000 + sanctioned.','var(--coral)'],['🏥','Medical Hallucinations','GPT-3.5 hallucinated drug dosages in 30%+ of medical queries.','var(--orange)'],['✈️','Air Canada Bot (2024)','AI invented a refund policy. Customer won in court. Policy enforced.','var(--amber)']].map(([ic,t,d,c]) => `
  <div class="c" style="border-color:${c}44">
    <div style="font-size:32px;margin-bottom:12px">${ic}</div>
    <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:6px">${t}</div>
    <div style="font-size:12px;color:var(--muted)">${d}</div>
  </div>`).join('')}
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
  <p class="hero-sub">Give AI a memory. Connect it to your documents, databases, and the live web.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">2020</div><div class="kpi-l">RAG paper (Meta)</div></div>
    <div class="kpi"><div class="kpi-n">$9B</div><div class="kpi-l">Perplexity valuation</div></div>
    <div class="kpi"><div class="kpi-n">1536</div><div class="kpi-l">Embedding dimensions</div></div>
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
  <p class="hero-sub">Agents plan, act, observe, and iterate. They don't just respond — they pursue goals.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">ReAct</div><div class="kpi-l">Core framework</div></div>
    <div class="kpi"><div class="kpi-n">2024</div><div class="kpi-l">Claude Computer Use</div></div>
    <div class="kpi"><div class="kpi-n">2025</div><div class="kpi-l">OpenAI Operator</div></div>
    <div class="kpi"><div class="kpi-n">$2B</div><div class="kpi-l">Devin valuation</div></div>
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
  ${[['Anthropic','Claude Computer Use','Sees screen · clicks · types autonomously'],['OpenAI','Operator (Jan 2025)','Browses web · fills forms · books things'],['Cognition','Devin','Full AI software engineer · $2B']].map(([co,n,d]) => `
  <div style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:10px;align-items:flex-start"><div style="width:6px;height:6px;border-radius:50%;background:var(--amber);margin-top:5px;flex-shrink:0"></div><div><div style="font-size:12px;font-weight:700;color:var(--text)">${co} — ${n}</div><div style="font-size:11px;color:var(--muted)">${d}</div></div></div>`).join('')}
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
  <p class="hero-sub">Vector databases, embeddings, and knowledge graphs power AI memory at scale.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">1536</div><div class="kpi-l">OpenAI embed dims</div></div>
    <div class="kpi"><div class="kpi-n">200K</div><div class="kpi-l">Claude context window</div></div>
    <div class="kpi"><div class="kpi-n">~ms</div><div class="kpi-l">Vector search latency</div></div>
    <div class="kpi"><div class="kpi-n">∞</div><div class="kpi-l">External memory size</div></div>
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
  <p class="hero-sub">Function calling lets LLMs reach out and interact with the real world.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">2023</div><div class="kpi-l">OpenAI func. calling</div></div>
    <div class="kpi"><div class="kpi-n">2024</div><div class="kpi-l">MCP by Anthropic</div></div>
    <div class="kpi"><div class="kpi-n">1000+</div><div class="kpi-l">MCP connectors</div></div>
    <div class="kpi"><div class="kpi-n">JSON</div><div class="kpi-l">Standard format</div></div>
  </div>
</div>
<div class="g2">
<div class="c">
  <div class="c-label">Function Calling JSON</div>
  <div class="code"><span class="cm">// Tool definition:</span>
{ <span class="str">"name"</span>: <span class="str">"get_weather"</span>,
  <span class="str">"parameters"</span>: {
    <span class="str">"city"</span>: { <span class="str">"type"</span>: <span class="str">"string"</span> }
  }
}

<span class="cm">// Model output (user asks "Weather in Tbilisi?"):</span>
{ <span class="str">"type"</span>: <span class="str">"tool_use"</span>,
  <span class="str">"name"</span>: <span class="str">"get_weather"</span>,
  <span class="str">"input"</span>: { <span class="str">"city"</span>: <span class="str">"Tbilisi"</span> }
}

<span class="cm">// Tool result returned to model:</span>
{ <span class="str">"temp"</span>: <span class="num">18</span>, <span class="str">"condition"</span>: <span class="str">"Partly cloudy"</span> }

<span class="cm">// Final answer: "18°C, partly cloudy in Tbilisi."</span></div>
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
${qHTML(8)}`
}

export function L9() {
  return `
<div class="hero">
  <div class="hero-tag">Level 09 · Multi-step Agents</div>
  <h1>Autonomous<br>Pipelines</h1>
  <p class="hero-sub">Chain steps, handle failures, loop when needed, coordinate teams of agents.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">LangGraph</div><div class="kpi-l">Top framework</div></div>
    <div class="kpi"><div class="kpi-n">Reflexion</div><div class="kpi-l">Self-correction</div></div>
    <div class="kpi"><div class="kpi-n">2023</div><div class="kpi-l">Multi-agent mainstream</div></div>
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
  <p class="hero-sub">Webhooks, security, cost optimization, and chatbot deployment at scale.</p>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-n">#1</div><div class="kpi-l">Prompt injection risk</div></div>
    <div class="kpi"><div class="kpi-n">90%</div><div class="kpi-l">Cost cut w/ caching</div></div>
    <div class="kpi"><div class="kpi-n">2B+</div><div class="kpi-l">WhatsApp users</div></div>
    <div class="kpi"><div class="kpi-n">$0.003</div><div class="kpi-l">GPT-4o-mini/1K tok</div></div>
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

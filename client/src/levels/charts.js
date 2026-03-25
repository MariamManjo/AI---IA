import Chart from 'chart.js/auto'
import { COLORS } from '../data/levels.js'

const CI = {}
const CO = {
  responsive: true, maintainAspectRatio: false,
  plugins: { legend: { labels: { color: '#9d8b6e', font: { size: 11 } } } },
  scales: {
    x: { ticks: { color: '#9d8b6e' }, grid: { color: 'rgba(255,248,235,.04)' } },
    y: { ticks: { color: '#9d8b6e' }, grid: { color: 'rgba(255,248,235,.04)' } },
  },
}
const COnoscale = {
  responsive: true, maintainAspectRatio: false,
  plugins: { legend: { labels: { color: '#9d8b6e', font: { size: 11 } } } },
}

function mkChart(id, type, data, options) {
  if (CI[id]) { CI[id].destroy(); delete CI[id] }
  const el = document.getElementById(id)
  if (!el) return
  CI[id] = new Chart(el, { type, data, options })
}

export function charts1() {
  setTimeout(() => {
    mkChart('c1a', 'bar', {
      labels: ['2015','16','17','18','19','20','21','22','23','24'],
      datasets: [{ label: 'AI Investment $B', data: [8,9,12,21,27,33,78,91,95,185], backgroundColor: COLORS.map(c => c + '88'), borderRadius: 8, borderWidth: 0 }],
    }, { ...CO, plugins: { ...CO.plugins, legend: { display: false } } })
    mkChart('c1b', 'doughnut', {
      labels: ['Machine Learning','Deep Learning','NLP','Computer Vision','Robotics'],
      datasets: [{ data: [35,28,20,12,5], backgroundColor: COLORS.slice(0,5).map(c => c + 'cc'), borderWidth: 0 }],
    }, { ...COnoscale, cutout: '65%' })

    // Animate Neural Network canvas
    ;(function animNN() {
      const canvas = document.getElementById('nn-live')
      if (!canvas) return
      const W = 300, H = 160
      canvas.width = W; canvas.height = H
      const ctx = canvas.getContext('2d')
      const LAYERS = [
        {x:48, ys:[32,80,128], c:'#f59e0b'},
        {x:120, ys:[20,54,88,122,148], c:'#a78bfa'},
        {x:192, ys:[20,54,88,122,148], c:'#818cf8'},
        {x:258, ys:[44,80,116], c:'#34d399'},
      ]
      let pts=[], fr=0
      function sp(){const li=Math.floor(Math.random()*(LAYERS.length-1));const A=LAYERS[li],B=LAYERS[li+1];pts.push({x:A.x,y:A.ys[Math.floor(Math.random()*A.ys.length)],tx:B.x,ty:B.ys[Math.floor(Math.random()*B.ys.length)],t:0,sp:.018+Math.random()*.012,c:A.c})}
      for(let i=0;i<6;i++)sp()
      function draw(){
        if(!document.getElementById('nn-live'))return
        ctx.clearRect(0,0,W,H)
        for(let l=0;l<LAYERS.length-1;l++){const A=LAYERS[l],B=LAYERS[l+1];for(const ay of A.ys)for(const by of B.ys){ctx.beginPath();ctx.moveTo(A.x,ay);ctx.lineTo(B.x,by);ctx.strokeStyle=A.c+'14';ctx.lineWidth=.7;ctx.stroke()}}
        const lbls=['INPUT','H1','H2','OUT'];LAYERS.forEach((L,i)=>{
          for(const y of L.ys){ctx.beginPath();ctx.arc(L.x,y,6,0,Math.PI*2);ctx.fillStyle=L.c+'20';ctx.fill();ctx.beginPath();ctx.arc(L.x,y,6,0,Math.PI*2);ctx.strokeStyle=L.c+'cc';ctx.lineWidth=1.6;ctx.stroke()}
          ctx.font='bold 7px Inter,sans-serif';ctx.fillStyle=L.c+'99';ctx.textAlign='center';ctx.fillText(lbls[i],L.x,H-3)
        })
        if(fr%22===0)sp()
        pts=pts.filter(p=>p.t<1)
        for(const p of pts){p.t+=p.sp;const x=p.x+(p.tx-p.x)*p.t,y=p.y+(p.ty-p.y)*p.t;const g=ctx.createRadialGradient(x,y,0,x,y,4);g.addColorStop(0,p.c);g.addColorStop(1,'transparent');ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fillStyle=g;ctx.fill()}
        fr++;requestAnimationFrame(draw)
      }
      draw()
    })()

    // Animate AI Particles canvas
    ;(function animParticles() {
      const canvas = document.getElementById('ai-particles-canvas')
      if (!canvas) return
      const W = canvas.parentElement.offsetWidth || 300, H = 190
      canvas.width = W; canvas.height = H
      const ctx = canvas.getContext('2d')
      const nodes = Array.from({length:25},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:2+Math.random()*2.5,c:'#60a5fa'}))
      function draw(){
        if(!document.getElementById('ai-particles-canvas'))return
        ctx.clearRect(0,0,W,H)
        for(let i=0;i<nodes.length;i++){const a=nodes[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;for(let j=i+1;j<nodes.length;j++){const b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);if(d<80){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(96,165,250,${.25*(1-d/80)})`;ctx.lineWidth=.8;ctx.stroke()}}const g=ctx.createRadialGradient(a.x,a.y,0,a.x,a.y,a.r*3);g.addColorStop(0,'#60a5fa88');g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.beginPath();ctx.arc(a.x,a.y,a.r*3,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,Math.PI*2);ctx.fillStyle='#60a5facc';ctx.fill()}
        requestAnimationFrame(draw)
      }
      draw()
    })()
  }, 100)
}

export function charts2() {
  setTimeout(() => {
    mkChart('c2a', 'bar', {
      labels: ['Fraud Detection','Churn Prediction','Demand Forecast','Image Class.','NLP','Medical'],
      datasets: [{ label: 'Accuracy %', data: [99,87,94,97,92,89], backgroundColor: COLORS.map(c => c + '99'), borderRadius: 8, borderWidth: 0 }],
    }, { ...CO, indexAxis: 'y', scales: { x: { min: 80, max: 100, ticks: { color: '#9d8b6e', callback: v => v + '%' }, grid: { color: 'rgba(255,248,235,.04)' } }, y: { ticks: { color: '#9d8b6e' }, grid: { color: 'rgba(255,248,235,.04)' } } }, plugins: { legend: { display: false } } })
  }, 100)
}

export function charts3() {
  setTimeout(() => {
    mkChart('c3a', 'radar', {
      labels: ['Simple Q&A','Math','Reasoning','Code','Creativity','Long Tasks'],
      datasets: [
        { label: 'Zero-shot', data: [75,50,55,60,70,45], borderColor: COLORS[0], backgroundColor: COLORS[0] + '22', borderWidth: 2 },
        { label: 'Few-shot', data: [85,65,68,75,78,60], borderColor: COLORS[2], backgroundColor: COLORS[2] + '22', borderWidth: 2 },
        { label: 'Chain of Thought', data: [80,88,90,82,75,75], borderColor: COLORS[5], backgroundColor: COLORS[5] + '22', borderWidth: 2 },
        { label: 'Tree of Thoughts', data: [82,95,97,88,80,82], borderColor: COLORS[1], backgroundColor: COLORS[1] + '22', borderWidth: 2 },
      ],
    }, { ...COnoscale, scales: { r: { ticks: { display: false, backdropColor: 'transparent' }, grid: { color: 'rgba(255,248,235,.08)' }, pointLabels: { color: '#9d8b6e', font: { size: 11 } } } } })
  }, 100)
}

export function charts4() {
  setTimeout(() => {
    mkChart('c4a', 'bar', {
      labels: ['Base (T=1)','Base (T=0)','Fine-tuned','+ Grounding','+ RAG','RAG + T=0'],
      datasets: [{ label: 'Hallucination Rate %', data: [22,15,12,8,5,2], backgroundColor: ['#fb718599','#fb718566','#f59e0b99','#f59e0b66','#34d39999','#34d399cc'], borderRadius: 8, borderWidth: 0 }],
    }, { ...CO, plugins: { ...CO.plugins, legend: { display: false } } })
  }, 100)
}

export function charts5() {
  setTimeout(() => {
    mkChart('c5a', 'radar', {
      labels: ['Accuracy','Freshness','Cost','Speed','Custom','Privacy'],
      datasets: [
        { label: 'Base LLM', data: [60,20,90,95,30,70], borderColor: '#9d8b6e', backgroundColor: '#9d8b6e22', borderWidth: 2 },
        { label: 'Fine-tuned', data: [80,25,60,85,90,85], borderColor: COLORS[2], backgroundColor: COLORS[2] + '22', borderWidth: 2 },
        { label: 'RAG', data: [92,95,80,75,70,90], borderColor: COLORS[1], backgroundColor: COLORS[1] + '22', borderWidth: 2 },
      ],
    }, { ...COnoscale, scales: { r: { ticks: { display: false, backdropColor: 'transparent' }, grid: { color: 'rgba(255,248,235,.08)' }, pointLabels: { color: '#9d8b6e', font: { size: 11 } } } } })
  }, 100)
}

export function charts6() {
  setTimeout(() => {
    mkChart('c6a', 'line', {
      labels: ['2019','2020','2021','2022','2023','2024','2025'],
      datasets: [
        { label: 'Task Success %', data: [20,28,38,52,67,80,88], borderColor: COLORS[0], backgroundColor: COLORS[0] + '18', fill: true, tension: .4, pointBackgroundColor: COLORS[0], pointRadius: 4 },
        { label: 'Tool Diversity Score', data: [5,8,12,20,35,60,85], borderColor: COLORS[5], backgroundColor: COLORS[5] + '15', fill: true, tension: .4, pointBackgroundColor: COLORS[5], pointRadius: 4 },
      ],
    }, { ...CO, scales: { x: { ticks: { color: '#9d8b6e' }, grid: { color: 'rgba(255,248,235,.04)' } }, y: { min: 0, max: 100, ticks: { color: '#9d8b6e' }, grid: { color: 'rgba(255,248,235,.04)' } } } })
  }, 100)
}

export function charts7() {
  setTimeout(() => {
    mkChart('c7a', 'bar', {
      labels: ['Pinecone','Weaviate','Chroma','Qdrant','pgvector'],
      datasets: [
        { label: 'Performance', data: [92,88,72,94,68], backgroundColor: COLORS[0] + '99', borderRadius: 6, borderWidth: 0 },
        { label: 'Ease of Use', data: [95,80,90,75,85], backgroundColor: COLORS[1] + '99', borderRadius: 6, borderWidth: 0 },
      ],
    }, { ...CO, scales: { x: { ticks: { color: '#9d8b6e' }, grid: { color: 'rgba(255,248,235,.04)' } }, y: { max: 100, ticks: { color: '#9d8b6e' }, grid: { color: 'rgba(255,248,235,.04)' } } } })

    // Neuron synapse canvas
    ;(function animNeuron() {
      const canvas = document.getElementById('neuron-canvas')
      if (!canvas) return
      const W = canvas.parentElement.offsetWidth || 280, H = 190
      canvas.width = W; canvas.height = H
      const ctx = canvas.getContext('2d')
      const cx = W/2, cy = H/2
      const branches = Array.from({length:8},(_,i)=>({angle:i/8*Math.PI*2,len:50+Math.random()*30,pts:[]}))
      let pts=[], fr=0
      function sp(){const b=branches[Math.floor(Math.random()*branches.length)];const ex=cx+Math.cos(b.angle)*b.len,ey=cy+Math.sin(b.angle)*b.len;pts.push({x:cx,y:cy,tx:ex,ty:ey,t:0,sp:.02+Math.random()*.015})}
      for(let i=0;i<3;i++)sp()
      function draw(){
        if(!document.getElementById('neuron-canvas'))return
        ctx.clearRect(0,0,W,H)
        for(const b of branches){const ex=cx+Math.cos(b.angle)*b.len,ey=cy+Math.sin(b.angle)*b.len;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(ex,ey);ctx.strokeStyle='rgba(167,139,250,.2)';ctx.lineWidth=1.2;ctx.stroke();ctx.beginPath();ctx.arc(ex,ey,4,0,Math.PI*2);ctx.fillStyle='rgba(167,139,250,.3)';ctx.fill();ctx.beginPath();ctx.arc(ex,ey,4,0,Math.PI*2);ctx.strokeStyle='rgba(167,139,250,.6)';ctx.lineWidth=1.2;ctx.stroke()}
        ctx.beginPath();ctx.arc(cx,cy,16,0,Math.PI*2);ctx.fillStyle='rgba(245,158,11,.15)';ctx.fill();ctx.beginPath();ctx.arc(cx,cy,16,0,Math.PI*2);ctx.strokeStyle='rgba(245,158,11,.6)';ctx.lineWidth=2;ctx.stroke()
        if(fr%30===0)sp()
        pts=pts.filter(p=>p.t<1)
        for(const p of pts){p.t+=p.sp;const x=p.x+(p.tx-p.x)*p.t,y=p.y+(p.ty-p.y)*p.t;const g=ctx.createRadialGradient(x,y,0,x,y,4);g.addColorStop(0,'#a78bfa');g.addColorStop(1,'transparent');ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fillStyle=g;ctx.fill()}
        fr++;requestAnimationFrame(draw)
      }
      draw()
    })()

    // Vector space scatter canvas
    ;(function animVectors() {
      const canvas = document.getElementById('vector-canvas')
      if (!canvas) return
      const W = canvas.parentElement.offsetWidth || 280, H = 190
      canvas.width = W; canvas.height = H
      const ctx = canvas.getContext('2d')
      const words = [
        {label:'king', x:.25, y:.25, c:'#f59e0b', cluster:0},
        {label:'queen', x:.38, y:.3, c:'#f59e0b', cluster:0},
        {label:'prince', x:.22, y:.42, c:'#f59e0b', cluster:0},
        {label:'cat', x:.7, y:.35, c:'#34d399', cluster:1},
        {label:'dog', x:.8, y:.28, c:'#34d399', cluster:1},
        {label:'pet', x:.75, y:.45, c:'#34d399', cluster:1},
        {label:'code', x:.55, y:.72, c:'#60a5fa', cluster:2},
        {label:'data', x:.65, y:.65, c:'#60a5fa', cluster:2},
        {label:'AI', x:.48, y:.62, c:'#60a5fa', cluster:2},
      ]
      let time = 0
      function draw(){
        if(!document.getElementById('vector-canvas'))return
        ctx.clearRect(0,0,W,H)
        // Draw cluster halos
        [[0.3,0.35,'#f59e0b'],[0.75,0.36,'#34d399'],[0.56,0.66,'#60a5fa']].forEach(([cx,cy,c])=>{
          const g=ctx.createRadialGradient(cx*W,cy*H,0,cx*W,cy*H,45);g.addColorStop(0,c+'18');g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.beginPath();ctx.arc(cx*W,cy*H,45,0,Math.PI*2);ctx.fill()
        })
        // Draw connections within clusters
        for(let i=0;i<words.length;i++)for(let j=i+1;j<words.length;j++){if(words[i].cluster===words[j].cluster){ctx.beginPath();ctx.moveTo(words[i].x*W,words[i].y*H);ctx.lineTo(words[j].x*W,words[j].y*H);ctx.strokeStyle=words[i].c+'25';ctx.lineWidth=1;ctx.stroke()}}
        // Draw dots + labels
        for(const w of words){
          const x=w.x*W,y=w.y*H
          ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fillStyle=w.c+'33';ctx.fill()
          ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.strokeStyle=w.c+'cc';ctx.lineWidth=1.5;ctx.stroke()
          ctx.font='bold 8px Inter,sans-serif';ctx.fillStyle=w.c+'cc';ctx.textAlign='center';ctx.fillText(w.label,x,y-9)
        }
        time++;requestAnimationFrame(draw)
      }
      draw()
    })()
  }, 100)
}

export function charts8() {
  setTimeout(() => {
    mkChart('c8a', 'doughnut', {
      labels: ['Web Search','Code Exec','File I/O','Browser','Comms','Database','Custom API'],
      datasets: [{ data: [24,20,16,14,12,8,6], backgroundColor: COLORS.map(c => c + 'cc'), borderWidth: 0 }],
    }, { ...COnoscale, cutout: '60%' })
  }, 100)
}

export function charts9() {
  setTimeout(() => {
    mkChart('c9a', 'bar', {
      labels: ['LangChain','LangGraph','AutoGen','CrewAI','n8n'],
      datasets: [
        { label: 'GitHub Stars (K)', data: [90,12,30,22,45], backgroundColor: COLORS[0] + '99', borderRadius: 6, borderWidth: 0 },
        { label: 'Ease (1-10)', data: [6,5,7,8,9], backgroundColor: COLORS[1] + '99', borderRadius: 6, borderWidth: 0 },
      ],
    }, CO)
  }, 100)
}

export function charts10() {
  setTimeout(() => {
    mkChart('c10a', 'scatter', {
      datasets: [
        { label: 'GPT-4o', data: [{ x: 15, y: 95 }], backgroundColor: COLORS[0], pointRadius: 14 },
        { label: 'Claude Sonnet', data: [{ x: 15, y: 96 }], backgroundColor: COLORS[2], pointRadius: 14 },
        { label: 'GPT-4o-mini', data: [{ x: 0.6, y: 82 }], backgroundColor: COLORS[1], pointRadius: 10 },
        { label: 'Haiku', data: [{ x: 0.3, y: 78 }], backgroundColor: COLORS[5], pointRadius: 10 },
        { label: 'Llama 3', data: [{ x: 0.1, y: 72 }], backgroundColor: COLORS[4], pointRadius: 10 },
        { label: 'Gemini Flash', data: [{ x: 0.4, y: 80 }], backgroundColor: COLORS[3], pointRadius: 10 },
      ],
    }, { ...CO, scales: { x: { title: { display: true, text: 'Cost per 1M tokens ($)', color: '#9d8b6e' }, ticks: { color: '#9d8b6e' }, grid: { color: 'rgba(255,248,235,.04)' } }, y: { title: { display: true, text: 'Capability', color: '#9d8b6e' }, ticks: { color: '#9d8b6e' }, grid: { color: 'rgba(255,248,235,.04)' } } } })
  }, 100)
}

export const CHARTFNS = [null, charts1, charts2, charts3, charts4, charts5, charts6, charts7, charts8, charts9, charts10]

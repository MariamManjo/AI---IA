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
        { label: 'Task Success %', data: [20,28,38,52,67,80,88], borderColor: COLORS[0], backgroundColor: COLORS[0] + '18', fill: true, tension: .4, pointBackgroundColor: COLORS[0] },
        { label: 'Tool Diversity', data: [5,8,12,20,35,60,85], borderColor: COLORS[5], backgroundColor: COLORS[5] + '12', fill: true, tension: .4, pointBackgroundColor: COLORS[5] },
      ],
    }, CO)
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

import express from 'express'
import cors from 'cors'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_FILE = join(__dirname, 'progress.json')
const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json())

function loadProgress() {
  if (!existsSync(DATA_FILE)) return {}
  try { return JSON.parse(readFileSync(DATA_FILE, 'utf8')) } catch { return {} }
}

function saveProgress(data) {
  try { writeFileSync(DATA_FILE, JSON.stringify(data, null, 2)) } catch {}
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.get('/api/progress', (_req, res) => {
  res.json(loadProgress())
})

app.post('/api/progress', (req, res) => {
  const { xp, done, scores, streak } = req.body
  const progress = loadProgress()
  const updated = { ...progress, xp, done, scores, streak, updatedAt: new Date().toISOString() }
  saveProgress(updated)
  res.json({ ok: true })
})

app.get('/api/leaderboard', (_req, res) => {
  const progress = loadProgress()
  res.json({
    xp: progress.xp ?? 0,
    levelsCompleted: (progress.done ?? []).length,
    streak: progress.streak ?? 1,
  })
})

// Serve built frontend in production
app.use(express.static(join(__dirname, '../client/dist')))
app.get('*', (_req, res) => {
  const indexPath = join(__dirname, '../client/dist/index.html')
  if (existsSync(indexPath)) res.sendFile(indexPath)
  else res.status(404).json({ error: 'Frontend not built. Run: npm run build' })
})

app.listen(PORT, () => {
  console.log(`AI Universe server running on http://localhost:${PORT}`)
})

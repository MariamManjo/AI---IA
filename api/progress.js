// Vercel serverless function — replaces Express /api/progress
// Uses in-memory store (stateless) since Vercel functions are ephemeral.
// For persistence, connect a database (e.g. Vercel KV / PlanetScale).

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method === 'GET') {
    return res.status(200).json({ xp: 0, done: [], scores: {}, streak: 1 })
  }

  if (req.method === 'POST') {
    // Progress is stored client-side in localStorage; server acknowledges.
    return res.status(200).json({ ok: true })
  }

  res.status(405).json({ error: 'Method not allowed' })
}

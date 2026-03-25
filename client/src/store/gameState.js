const KEY = 'aig2'

export function loadState() {
  const defaults = { xp: 0, done: [], scores: {}, streak: 1 }
  try {
    return { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || '{}') }
  } catch {
    return defaults
  }
}

export function saveState(gs) {
  try {
    localStorage.setItem(KEY, JSON.stringify(gs))
  } catch {}
}

export async function syncToServer(gs) {
  try {
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gs),
    })
  } catch {}
}

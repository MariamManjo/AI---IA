import React from 'react'
import { ICONS, NAMES } from '../data/levels.js'

export default function TopBar({ gs, curLevel }) {
  return (
    <div id="top">
      <div id="top-title">{ICONS[curLevel - 1]} {NAMES[curLevel - 1]}</div>
      <div className="top-stat">
        <span className="ts-n">{gs.xp}</span>
        <span className="ts-l">XP</span>
      </div>
      <div className="top-stat">
        <span className="ts-n">🔥{gs.streak}</span>
        <span className="ts-l">Streak</span>
      </div>
      <div className="top-stat">
        <span className="ts-n">{gs.done.length}/10</span>
        <span className="ts-l">Done</span>
      </div>
    </div>
  )
}

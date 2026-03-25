import React from 'react'
import { ICONS, NAMES } from '../data/levels.js'

export default function Sidebar({ gs, curLevel, onSelect, onToast }) {
  return (
    <nav id="sb">
      <div className="sb-logo"><span>⚡</span>AI</div>
      <div id="sb-levels">
        {Array.from({ length: 10 }, (_, i) => {
          const id = i + 1
          const done = gs.done.includes(id)
          const locked = id > 1 && !gs.done.includes(id - 1)
          let cls = 'lvl-dot'
          if (done) cls += ' done'
          else if (locked) cls += ' locked'
          else if (id === curLevel) cls += ' active'
          return (
            <React.Fragment key={id}>
              {id === 5 && <div className="sb-div" />}
              <button
                className={cls}
                id={`lbtn${id}`}
                onClick={locked ? () => onToast(`🔒 Complete level ${id - 1} first`) : () => onSelect(id)}
                title={NAMES[i]}
              >
                <span className="di">{ICONS[i]}</span>
                <span className="dn">{id}</span>
              </button>
            </React.Fragment>
          )
        })}
      </div>
      <div className="xp-vert">
        <div className="xp-bar-v">
          <div className="xp-bar-fill" style={{ height: Math.min(100, (gs.xp % 1000) / 10) + '%' }} />
        </div>
        <div className="xp-num-v">{gs.xp} XP</div>
      </div>
    </nav>
  )
}

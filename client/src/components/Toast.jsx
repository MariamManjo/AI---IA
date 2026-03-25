import React, { useEffect, useRef } from 'react'

export default function Toast({ message }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!message) return
    const el = ref.current
    el.classList.add('show')
    const t = setTimeout(() => el.classList.remove('show'), 2500)
    return () => clearTimeout(t)
  }, [message])

  return <div id="toast" ref={ref}>{message}</div>
}

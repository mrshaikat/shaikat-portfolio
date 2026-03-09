import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, fx = 0, fy = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`
        cursorRef.current.style.top = `${my}px`
      }
    }

    const animate = () => {
      fx += (mx - fx) * 0.12
      fy += (my - fy) * 0.12
      if (followerRef.current) {
        followerRef.current.style.left = `${fx}px`
        followerRef.current.style.top = `${fy}px`
      }
      rafId = requestAnimationFrame(animate)
    }

    const setHover = (hovered: boolean) => {
      cursorRef.current?.classList.toggle('hovered', hovered)
      followerRef.current?.classList.toggle('hovered', hovered)
    }

    const targets = document.querySelectorAll('a, button, .skill-card, .project-card, .info-card')
    targets.forEach(el => {
      el.addEventListener('mouseenter', () => setHover(true))
      el.addEventListener('mouseleave', () => setHover(false))
    })

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return { cursorRef, followerRef }
}

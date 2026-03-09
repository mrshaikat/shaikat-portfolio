import { useCursor } from '../hooks/useCursor'

export default function Cursor() {
  const { cursorRef, followerRef } = useCursor()

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-[width,height,opacity] duration-300"
        style={{ transition: 'width 0.3s, height 0.3s, opacity 0.3s' }}
        id="cursor"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-9 h-9 border border-accent/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ transition: 'left 0s, top 0s, width 0.4s, height 0.4s' }}
        id="cursor-follower"
      />
      <style>{`
        #cursor.hovered { width: 8px; height: 8px; }
        #cursor-follower.hovered { width: 56px; height: 56px; border-color: rgba(79,255,176,0.5); }
      `}</style>
    </>
  )
}

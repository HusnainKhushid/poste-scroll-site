import { useCallback, useRef, useState } from 'react'

export type DoorState = 'closed' | 'opening' | 'open' | 'closing'

/**
 * The whole interaction. Both clips play start to finish, so `ended` is an
 * exact stop — there is no seeking, no mid-clip pause, and none of the
 * `timeupdate` overshoot that makes a scrubbed door look like it bounces.
 */
export function useMailbox() {
  const openRef = useRef<HTMLVideoElement>(null)
  const closeRef = useRef<HTMLVideoElement>(null)
  const [state, setState] = useState<DoorState>('closed')

  const busy = state === 'opening' || state === 'closing'

  const toggle = useCallback(() => {
    const openVid = openRef.current
    const closeVid = closeRef.current
    if (!openVid || !closeVid || busy) return

    if (state === 'closed') {
      setState('opening')
      closeVid.currentTime = 0 // arm the return trip
      openVid.currentTime = 0
      void openVid.play().catch(() => setState('open'))
    } else {
      setState('closing')
      closeVid.currentTime = 0
      // Rewind the opening clip now, while the closing clip covers it.
      // By the time this is visible again it is back on frame one.
      openVid.currentTime = 0
      void closeVid.play().catch(() => setState('closed'))
    }
  }, [busy, state])

  const onOpened = useCallback(() => setState('open'), [])
  const onClosed = useCallback(() => setState('closed'), [])

  return { state, busy, toggle, openRef, closeRef, onOpened, onClosed }
}

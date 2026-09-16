import type { RefObject } from 'react'
import type { DoorState } from '../useMailbox'

type Props = {
  state: DoorState
  openRef: RefObject<HTMLVideoElement | null>
  closeRef: RefObject<HTMLVideoElement | null>
  onOpened: () => void
  onClosed: () => void
}

/**
 * Two clips, stacked. `close.mp4` is `open.mp4` reversed, so the last frame
 * of one is the first frame of the other and the hand-off is invisible.
 *
 * The closing clip sits on top and is only opaque while it plays. Everything
 * else — closed, opening, open — is the opening clip parked at whichever end
 * it happens to be at.
 */
export default function MailboxVideo({
  state,
  openRef,
  closeRef,
  onOpened,
  onClosed,
}: Props) {
  return (
    <>
      <video
        ref={openRef}
        className="stage__video"
        src={`${import.meta.env.BASE_URL}media/open.mp4`}
        poster={`${import.meta.env.BASE_URL}media/poster-closed.jpg`}
        preload="auto"
        muted
        playsInline
        disablePictureInPicture
        onEnded={onOpened}
        aria-hidden="true"
      />
      <video
        ref={closeRef}
        className={
          state === 'closing'
            ? 'stage__video'
            : 'stage__video stage__video--hidden'
        }
        src={`${import.meta.env.BASE_URL}media/close.mp4`}
        poster={`${import.meta.env.BASE_URL}media/poster-open.jpg`}
        preload="auto"
        muted
        playsInline
        disablePictureInPicture
        onEnded={onClosed}
        aria-hidden="true"
      />
    </>
  )
}

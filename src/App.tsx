import FeatureCard from './components/FeatureCard'
import MailboxVideo from './components/MailboxVideo'
import OpenButton from './components/OpenButton'
import { useMailbox } from './useMailbox'

export default function App() {
  const { state, busy, toggle, openRef, closeRef, onOpened, onClosed } =
    useMailbox()

  const label = state === 'open' || state === 'closing' ? 'Close' : 'Open'

  return (
    <main className="stage" data-section="01-hero">
      <MailboxVideo
        state={state}
        openRef={openRef}
        closeRef={closeRef}
        onOpened={onOpened}
        onClosed={onClosed}
      />

      <div className="stage__scrim stage__scrim--top" aria-hidden="true" />
      <div className="stage__scrim stage__scrim--left" aria-hidden="true" />
      <div className="stage__scrim stage__scrim--bottom" aria-hidden="true" />
      <div className="stage__grain" aria-hidden="true" />

      <OpenButton label={label} busy={busy} onClick={toggle} />

      <div className="stage__ui">
        <header className="top">
          <div className="wordmark rise" style={{ animationDelay: '80ms' }}>
            <span className="wordmark__dot" aria-hidden="true" />
            POSTE
          </div>

          <nav className="pill rise" style={{ animationDelay: '160ms' }}>
            <span className="pill__label">Held for you alone</span>
            <button type="button" className="pill__menu" aria-label="Menu">
              <span /> <span />
            </button>
          </nav>

          <div className="top__right" />
        </header>

        <div className="mid">
          <div>
            <h1 className="headline rise" style={{ animationDelay: '240ms' }}>
              Only you
              <br />
              have the
              <br />
              <span className="headline__accent">key</span>
            </h1>

            <p className="standfirst rise" style={{ animationDelay: '400ms' }}>
              Poste restante for the internet. Held for one named person,
              released to nobody else.
            </p>
          </div>

          <FeatureCard
            image={`${import.meta.env.BASE_URL}media/card-seal.jpg`}
            chip="Sealed"
            copy="Closed on your device, opened only by them, stored by nobody."
            cta="Request a box"
          />
        </div>

        <footer className="foot rise" style={{ animationDelay: '640ms' }}>
          <span className="foot__box">
            Box 114
            <span className="barcode" aria-hidden="true" />
          </span>
          <span className="foot__mid">No keys on our servers</span>
          <span>78°N / Svalbard</span>
        </footer>
      </div>
    </main>
  )
}

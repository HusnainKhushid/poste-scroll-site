type Props = {
  label: string
  busy: boolean
  onClick: () => void
}

export default function OpenButton({ label, busy, onClick }: Props) {
  return (
    <button
      type="button"
      className="opener rise"
      style={{ animationDelay: '560ms' }}
      onClick={onClick}
      disabled={busy}
      aria-label={`${label} the mailbox`}
    >
      <span className="opener__ring" aria-hidden="true" />
      <span className="opener__label">{label}</span>
    </button>
  )
}

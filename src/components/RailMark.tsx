export default function RailMark({ strokeWidth = 1.4 }: { strokeWidth?: number }) {
  return <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M9 28V12a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5v16H9ZM9 19h22M20 7v12M14 28l-4 7m16-7 4 7M12 32h16" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="15" cy="24" r="1.2" fill="currentColor" /><circle cx="25" cy="24" r="1.2" fill="currentColor" />
  </svg>
}

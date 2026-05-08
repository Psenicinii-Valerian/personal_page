export default function Fleuron({ className = 'fleuron' }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 200 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path d="M0 12 H80" stroke="currentColor" strokeWidth="0.75" fill="none" />
        <path d="M120 12 H200" stroke="currentColor" strokeWidth="0.75" fill="none" />
        <path
          d="M88 12 q4 -8 8 0 q4 8 8 0 q4 -8 8 0"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="100" cy="12" r="1.4" fill="currentColor" />
      </svg>
    </div>
  );
}

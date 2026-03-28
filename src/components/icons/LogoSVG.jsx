export default function LogoSVG({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <rect x="2" y="2" width="32" height="32" rx="10" stroke="url(#logoG1)" strokeWidth="2"/>
      <path d="M11 25V11h9l-4.5 7h5.5L11 28v-7h-4l4-7z" fill="url(#logoG2)"/>
      <defs>
        <linearGradient id="logoG1" x1="0" y1="0" x2="36" y2="36"><stop stopColor="#818cf8"/><stop offset="1" stopColor="#06b6d4"/></linearGradient>
        <linearGradient id="logoG2" x1="7" y1="11" x2="25" y2="28"><stop stopColor="#818cf8"/><stop offset="1" stopColor="#06b6d4"/></linearGradient>
      </defs>
    </svg>
  );
}

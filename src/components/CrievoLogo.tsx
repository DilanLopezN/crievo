export default function CrievoLogo({ size = 32 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" width={size} height={size}>
      <path d="M20 4L8 14v12l12 10 12-10V14L20 4z" fill="none" stroke="#8b5cf6" strokeWidth="2" />
      <path d="M14 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="#8b5cf6" strokeWidth="2" fill="none" />
      <path d="M16 16l4-2 4 2-4 6-4-6z" fill="#8b5cf6" opacity="0.6" />
    </svg>
  );
}

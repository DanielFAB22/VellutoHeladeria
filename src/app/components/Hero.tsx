export function Hero() {
  return (
    <div className="border-2 border-black h-96 flex items-center justify-center bg-white relative">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="0.3" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="0.3" />
      </svg>
    </div>
  );
}

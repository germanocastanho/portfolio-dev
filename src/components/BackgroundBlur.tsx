export const BackgroundBlur = () => {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Cyan — top-left */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[hsl(189,94%,55%)] opacity-[0.07] blur-[100px] animate-orb-1" />

      {/* Purple — bottom-right */}
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[hsl(265,89%,70%)] opacity-[0.07] blur-[120px] animate-orb-2" />

      {/* Blue — center */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-[hsl(210,98%,58%)] opacity-[0.04] blur-[90px] animate-orb-3" />
    </div>
  );
};

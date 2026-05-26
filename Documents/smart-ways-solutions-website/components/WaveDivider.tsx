interface WaveDividerProps {
  /** colour of the section ABOVE the divider */
  fromColor: string;
  /** colour of the section BELOW the divider */
  toColor: string;
  /** flip the wave horizontally for variety */
  flip?: boolean;
}

export default function WaveDivider({ fromColor, toColor, flip = false }: WaveDividerProps) {
  return (
    <div
      className="relative w-full overflow-hidden leading-none"
      style={{ backgroundColor: fromColor, height: 56 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full h-full"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      >
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}

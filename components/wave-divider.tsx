interface WaveDividerProps {
  fillColor: string
  className?: string
  flip?: boolean
}

export function WaveDivider({ fillColor, className = "", flip = false }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        preserveAspectRatio="none"
        style={{ height: "clamp(40px, 6vw, 100px)" }}
      >
        <path
          d="M0 100V60C120 80 240 40 360 30C480 20 600 50 720 55C840 60 960 30 1080 20C1200 10 1320 40 1440 50V100H0Z"
          fill={fillColor}
        />
      </svg>
    </div>
  )
}

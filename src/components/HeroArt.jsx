export default function HeroArt() {
  return (
    <svg viewBox="0 0 640 480" className="h-full w-full" preserveAspectRatio="xMidYMax slice" role="img" aria-label="Premium SUV waiting at Sydney Airport at dusk">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1128" />
          <stop offset="55%" stopColor="#101b3d" />
          <stop offset="100%" stopColor="#16234d" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#eebc4a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#eebc4a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1128" />
          <stop offset="100%" stopColor="#030712" />
        </linearGradient>
      </defs>

      <rect width="640" height="480" fill="url(#sky)" />
      <rect width="640" height="480" fill="url(#glow)" />

      {/* terminal skyline */}
      <g opacity="0.85">
        <rect x="0" y="260" width="640" height="70" fill="#0d1633" />
        {Array.from({ length: 18 }).map((_, i) => (
          <rect
            key={i}
            x={10 + i * 36}
            y={272 + ((i * 7) % 18)}
            width="18"
            height="14"
            fill={i % 3 === 0 ? '#eebc4a' : '#3a4a80'}
            opacity={i % 3 === 0 ? 0.9 : 0.5}
          />
        ))}
      </g>

      {/* control tower accent */}
      <rect x="560" y="150" width="10" height="120" fill="#0d1633" />
      <circle cx="565" cy="145" r="10" fill="#eebc4a" opacity="0.8" />

      {/* runway lights */}
      <g>
        {Array.from({ length: 10 }).map((_, i) => (
          <circle key={i} cx={40 + i * 60} cy="332" r="2.5" fill="#eebc4a" opacity="0.8" />
        ))}
      </g>

      {/* ground */}
      <rect x="0" y="330" width="640" height="150" fill="url(#ground)" />

      {/* SUV silhouette */}
      <g transform="translate(150,332)">
        <ellipse cx="170" cy="118" rx="200" ry="14" fill="#000" opacity="0.35" />
        <path
          d="M10 96 L18 60 Q26 40 52 40 L96 40 Q112 18 140 18 L232 18 Q258 18 270 40 L316 40 Q338 40 344 62 L350 96 Z"
          fill="#0d1633"
          stroke="#eebc4a"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        <rect x="98" y="26" width="60" height="20" rx="4" fill="#16234d" />
        <rect x="164" y="26" width="98" height="20" rx="4" fill="#16234d" />
        <circle cx="70" cy="98" r="20" fill="#030712" stroke="#eebc4a" strokeWidth="3" />
        <circle cx="288" cy="98" r="20" fill="#030712" stroke="#eebc4a" strokeWidth="3" />
        <circle cx="70" cy="98" r="7" fill="#3a4a80" />
        <circle cx="288" cy="98" r="7" fill="#3a4a80" />
        <rect x="6" y="56" width="10" height="8" rx="2" fill="#eebc4a" />
        <rect x="342" y="56" width="10" height="8" rx="2" fill="#f4d788" opacity="0.9" />
      </g>
    </svg>
  )
}

import * as React from 'react'

function SvgComponent({ id, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 341 496"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <image
        mask={`url(#mask${id})`}
        xlinkHref={props.href}
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
      />
      <path
        opacity={0.8}
        d="M154 176L187 0l149 32 5 430-148 33-39-319z"
        fill={`url(#vpl${id})`}
      />
      <defs>
        <linearGradient
          id={`vpl${id}`}
          x1={136}
          y1={203}
          x2={233}
          y2={204.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.52} />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
      <mask id={`mask${id}`}>
        <polygon
          points="187.000 0.000, 26.500 15.000, 0.000 495.500, 193.000 495.000, 341.000 462.000, 336.000 32.000, 187.000 0.000"
          fill="#fff"
        />
      </mask>
    </svg>
  )
}

export default SvgComponent

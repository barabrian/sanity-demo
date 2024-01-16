import * as React from 'react'

function SvgComponent({ id, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1130 812"
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
        d="M795 380.832L1130 271.5l-41 540.13H0V380.832h795z"
        fill={`url(#vpl${id})`}
      />
      <defs>
        <linearGradient
          id={`vpl${id}`}
          x1={564.5}
          y1={269}
          x2={571.593}
          y2={463.506}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.59} />
          <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <mask id={`mask${id}`}>
        <polygon
          points="1088.000 0.000, 0.000 28.500, 0.000 812.000, 1088.500 812.000, 1130.000 270.000, 1088.000 0.000"
          fill="#fff"
        />
      </mask>
    </svg>
  )
}

export default SvgComponent

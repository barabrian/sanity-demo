import * as React from 'react'

function SvgComponent({ id, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 340 496"
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
        d="M74.5 191.5L85.5 0 335 17.5 312 496l-194.5-3-43-301.5z"
        fill={`url(#vpl${id})`}
        fillOpacity={0.8}
      />
      <defs>
        <linearGradient
          id={`vpl${id}`}
          x1={55}
          y1={192}
          x2={241}
          y2={200.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.5} />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
      <mask id={`mask${id}`}>
        <polygon
          points="0.000 38.246, 85.386 0.000, 340.000 17.500, 312.000 496.000, 118.000 493.000, 4.000 493.000, 0.000 38.246"
          fill="#fff"
        />
      </mask>
    </svg>
  )
}

export default SvgComponent

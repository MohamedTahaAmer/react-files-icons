import type { SVGProps } from "react"
const FileTypeDoppler = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		id="Layer_1"
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 32 32"
	>
		{" "}
		<defs>
			{" "}
			<linearGradient
				id="linear-gradient"
				x1="24.11"
				y1="808.88"
				x2="4.48"
				y2="835.23"
				gradientTransform="translate(0 -807.89)"
				gradientUnits="userSpaceOnUse"
			>
				{" "}
				<stop offset="0.04" stopColor="#409ff8" /> <stop offset="0.5" stopColor="#1673ff" />{" "}
				<stop offset="1" stopColor="#516ff7" />{" "}
			</linearGradient>{" "}
		</defs>{" "}
		<path
			d="M2.59,2a.27.27,0,0,0-.23.43l5,7.8a2.25,2.25,0,0,0,1.88,1H16c2.47,0,4,2.18,4,4.62s-1.65,4.61-4,4.61H8.78a.75.75,0,0,0-.74.75H8v7.8a.75.75,0,0,0,.75.74H18c7.94,0,11.91-7.54,11.91-13.9S26,2,18,2ZM5.87,20.56H4.07a2.17,2.17,0,0,0-2,2.32v6.74a.2.2,0,0,0,.18.21h1.8a2.19,2.19,0,0,0,2-2.32V20.77a.2.2,0,0,0-.19-.21Z"
			style={{ fillRule: "evenodd", fill: "url(#linear-gradient)" }}
		/>{" "}
	</svg>
)
export default FileTypeDoppler

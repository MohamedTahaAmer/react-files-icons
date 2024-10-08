import type { SVGProps } from "react"
const FileTypeShuttle = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
		{" "}
		<defs>
			{" "}
			<linearGradient
				id="a"
				x1="36.036"
				x2="171.04"
				y1="171.21"
				y2="36.209"
				gradientTransform="matrix(1.2523 0 0 1.2523 -93.833 -117.64)"
				gradientUnits="userSpaceOnUse"
			>
				{" "}
				<stop stopColor="#F42929" offset="0" /> <stop stopColor="#FF8A3F" offset=".49479" />{" "}
				<stop stopColor="#E5E938" offset="1" />{" "}
			</linearGradient>{" "}
		</defs>{" "}
		<title>file_type_shuttle</title>{" "}
		<g transform="matrix(.16512 0 0 .16512 10.022 13.873)">
			{" "}
			<path
				d="m78.693-71.892-42.285 42.284h-42.284l-42.284 42.283h42.284v42.285h-42.284v42.284h42.284v-42.284h42.284v42.284l42.285-42.284v-42.285l42.284-42.283v-42.284z"
				clipRule="evenodd"
				fill="url(#a)"
				fillRule="evenodd"
				strokeWidth="1.2523"
			/>{" "}
		</g>{" "}
	</svg>
)
export default FileTypeShuttle

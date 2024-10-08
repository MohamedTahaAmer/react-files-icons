import type { SVGProps } from "react"
const FileTypeFavicon = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
		{" "}
		<defs>
			{" "}
			<linearGradient
				id="a"
				x1="-66.775"
				y1="-171.703"
				x2="-66.775"
				y2="-171.817"
				gradientTransform="matrix(240, 0, 0, -240, 16042, -41206)"
				gradientUnits="userSpaceOnUse"
			>
				{" "}
				<stop offset="0" stopColor="#ec790f" /> <stop offset="1" stopColor="#f51032" />{" "}
			</linearGradient>{" "}
		</defs>{" "}
		<title>file_type_favicon</title>{" "}
		<rect x="2" y="2" width="28" height="28" rx="1.75" ry="1.75" style={{ fill: "url(#a)" }} />{" "}
		<polygon
			points="16 22.625 9.511 26.033 10.75 18.815 5.5 13.704 12.755 12.65 16 6.083 19.245 12.65 26.5 13.704 21.25 18.815 22.489 26.033 16 22.625"
			style={{ fill: "#fff" }}
		/>{" "}
	</svg>
)
export default FileTypeFavicon

import type { SVGProps } from "react"
const FileTypeFormkit = (props: SVGProps<SVGSVGElement>) => (
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
				x1="217.28"
				y1="987.61"
				x2="217.34"
				y2="987.51"
				gradientTransform="matrix(300, 0, 0, -300, -65182, 296286.64)"
				gradientUnits="userSpaceOnUse"
			>
				{" "}
				<stop offset="0" stopColor="#f79259" /> <stop offset="1" stopColor="#f8ce68" />{" "}
			</linearGradient>{" "}
		</defs>{" "}
		<path
			id="Combined-Shape"
			d="M30.07,25.39v4.67h-14V25.39ZM6.74,20.73v4.66H2.07V20.73Zm4.66-4.67v4.67H6.74V16.06Zm4.67-4.67v4.67H11.4V11.39ZM11.4,6.73v4.66H6.74V6.73ZM6.74,2.06V6.73H2.07V2.06Z"
			style={{ fillRule: "evenodd", fill: "url(#linear-gradient)" }}
		/>{" "}
	</svg>
)
export default FileTypeFormkit

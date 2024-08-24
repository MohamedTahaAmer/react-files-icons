import type { SVGProps } from "react"
const FolderTypeCommon = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
		{" "}
		<defs>
			{" "}
			<clipPath id="a">
				{" "}
				<rect width="32" height="32" style={{ fill: "none" }} />{" "}
			</clipPath>{" "}
		</defs>{" "}
		<title>folder_type_common</title>{" "}
		<g style={{ clipPath: "url(#a)" }}>
			{" "}
			<path d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z" style={{ fill: "#7c99ac" }} />{" "}
			<path
				d="M23.507,15a7.445,7.445,0,0,0-3,.63,7.482,7.482,0,0,1,1.684,1.02,6,6,0,1,1,0,11.7,7.485,7.485,0,0,1-1.684,1.02,7.5,7.5,0,1,0,3-14.371Z"
				style={{ fill: "#d1d1d1" }}
			/>{" "}
			<path
				d="M17.507,22.5a6.008,6.008,0,0,0,4.686,5.85,7.489,7.489,0,0,0,0-11.7,6.008,6.008,0,0,0-4.686,5.85Z"
				style={{ fill: "#d1d1d1" }}
			/>{" "}
			<path
				d="M16.007,22.5a7.508,7.508,0,0,1,4.5-6.87,7.5,7.5,0,1,0,0,13.74,7.508,7.508,0,0,1-4.5-6.87Z"
				style={{ fill: "#d1d1d1" }}
			/>{" "}
		</g>{" "}
	</svg>
)
export default FolderTypeCommon

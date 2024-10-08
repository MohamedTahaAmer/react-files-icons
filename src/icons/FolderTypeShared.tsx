import type { SVGProps } from "react"
const FolderTypeShared = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
		{" "}
		<defs>
			{" "}
			<clipPath id="a">
				{" "}
				<rect width="32" height="32" style={{ fill: "none" }} />{" "}
			</clipPath>{" "}
		</defs>{" "}
		<title>folder_type_shared</title>{" "}
		<g style={{ clipPath: "url(#a)" }}>
			{" "}
			<path d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z" style={{ fill: "#764af1" }} />{" "}
			<path
				d="M15,11a4,4,0,0,0-4,4v6a4,4,0,0,0,4,4h6.17a3,3,0,1,0,0-2H15a2,2,0,0,1-2-2V15a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2h2a4,4,0,0,0-4-4ZM27,31a4,4,0,0,0,4-4V21a4,4,0,0,0-4-4H20.83a3,3,0,1,0,0,2H27a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2H21a2,2,0,0,1-2-2H17a4,4,0,0,0,4,4Z"
				style={{ fill: "#b094ff" }}
			/>{" "}
			<path d="M17,26.5V27h2v-.5Z" style={{ fill: "#b094ff" }} />{" "}
		</g>{" "}
	</svg>
)
export default FolderTypeShared

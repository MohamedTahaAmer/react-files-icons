import type { SVGProps } from "react"
const FileTypeZeit = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
		{" "}
		<defs>
			{" "}
			<linearGradient
				id="a"
				x1="1.459"
				y1="32.377"
				x2="1.096"
				y2="32.82"
				gradientTransform="matrix(113, 0, 0, -100, -112, 3301)"
				gradientUnits="userSpaceOnUse"
			>
				{" "}
				<stop offset="0" /> <stop offset="1" stopColor="#fff" />{" "}
			</linearGradient>{" "}
		</defs>{" "}
		<title>file_type_zeit</title>{" "}
		<polygon points="16 3.611 30 28.389 2 28.389 16 3.611" style={{ fillRule: "evenodd", fill: "url(#a)" }} />{" "}
	</svg>
)
export default FileTypeZeit

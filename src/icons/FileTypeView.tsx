import type { SVGProps } from "react"
const FileTypeView = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
		{" "}
		<title>file_type_view</title>{" "}
		<polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style={{ fill: "#e44f26" }} />{" "}
		<polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style={{ fill: "#f1662a" }} />{" "}
		<polygon
			points="15 20.681 7 15.872 7 14.129 15 9.319 15 12.016 9.897 15 15 17.986 15 20.681"
			style={{ fill: "#fff" }}
		/>{" "}
		<polygon
			points="17 20.678 17 17.984 22.14 15 17 12.017 17 9.322 25 14.109 25 15.891 17 20.678"
			style={{ fill: "#fff" }}
		/>{" "}
	</svg>
)
export default FileTypeView

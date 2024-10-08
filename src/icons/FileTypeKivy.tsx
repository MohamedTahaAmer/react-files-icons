import type { SVGProps } from "react"
const FileTypeKivy = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
		{" "}
		<defs>
			{" "}
			<linearGradient
				id="linear-gradient"
				x1="14.989"
				y1="17.164"
				x2="15.124"
				y2="17.091"
				gradientTransform="matrix(1, 0, 0, -1, 0, 34)"
				gradientUnits="userSpaceOnUse"
			>
				{" "}
				<stop offset="0" stopOpacity="0.03" /> <stop offset="0.085" stopColor="#090909" stopOpacity="0.027" />{" "}
				<stop offset="0.224" stopColor="#212121" stopOpacity="0.023" />{" "}
				<stop offset="0.398" stopColor="#494949" stopOpacity="0.018" />{" "}
				<stop offset="0.603" stopColor="gray" stopOpacity="0.012" />{" "}
				<stop offset="0.83" stopColor="#c6c6c6" stopOpacity="0.005" />{" "}
				<stop offset="1" stopColor="#fff" stopOpacity="0" />{" "}
			</linearGradient>{" "}
		</defs>{" "}
		<title>file_type_kivy</title> <circle cx="16" cy="16" r="14" style={{ fill: "#3f4142" }} />{" "}
		<path
			d="M26.469,12.631,17.477,13.65l4.146,4.14,4.948-4.942C26.716,12.7,26.668,12.607,26.469,12.631Z"
			style={{ fill: "#ebeded" }}
		/>{" "}
		<path
			d="M20.273,17.76l-3.785-3.785L13.481,19.64l2.441,2.441a.994.994,0,0,0,.705.289h0a.994.994,0,0,0,.705-.289l2.935-2.917a.98.98,0,0,0,.289-.7A.964.964,0,0,0,20.273,17.76Z"
			style={{ fill: "#ebeded" }}
		/>{" "}
		<path d="M12.1,9.588v7.407a3.618,3.618,0,0,0,.892,2.158l.488.488,3.007-5.665Z" style={{ fill: "#f9f9f9" }} />{" "}
		<path d="M7.906,19.074l3.266,3.266V14.59L7.906,17.856A.869.869,0,0,0,7.906,19.074Z" style={{ fill: "#f9f9f9" }} />{" "}
		<path d="M10.377,12.866,7.111,9.6v7.744l3.266-3.266A.862.862,0,0,0,10.377,12.866Z" style={{ fill: "#f9f9f9" }} />{" "}
		<polygon
			points="16.488 13.975 16.603 14.09 13.596 19.755 13.481 19.64 16.488 13.975"
			style={{ fill: "url(#linear-gradient)" }}
		/>{" "}
	</svg>
)
export default FileTypeKivy

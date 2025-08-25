import Image from "next/image";
import React from "react";
import UMNPatternSvg from "@/media/pattern.svg";
export default function UMNPattern() {
	return (
		<Image
			src={UMNPatternSvg}
			alt=""
			className="umn-pattern"
		></Image>
	);
}

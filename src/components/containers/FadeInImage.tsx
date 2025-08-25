"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export default function FadeInImage({
	src,
	className,
}: {
	src: StaticImageData;
	className: string;
}) {
	const [loaded, setLoaded] = useState(false);
	return (
		<Image
			src={src}
			alt=""
			className={`fade-in-image ${
				loaded ? "fade-in-image--loaded" : ""
			} ${className}`}
			priority
			onLoadingComplete={() => setLoaded(true)}
		/>
	);
}

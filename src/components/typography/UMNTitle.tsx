import React from "react";

export default function UMNTitle({
	children,
	className = "",
	variant = "dark",
}: {
	children: string;
	className?: string;
	variant?: "light" | "dark";
}) {
	return (
		<h2 className={`umn-title umn-title--${variant} ${className}`}>
			<div className="umn-title__abstract" />
			{children}
		</h2>
	);
}

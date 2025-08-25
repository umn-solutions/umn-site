import React, { ReactNode } from "react";

export default function MainSection({
	children,
	className,
}: {
	children: ReactNode;
	className: string;
}) {
	return (
		<section className={`main-section ${className}`}>
			{children}
			</section>
	);
}

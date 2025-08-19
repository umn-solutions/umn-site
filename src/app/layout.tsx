import type { Metadata } from "next";

import { fontVariables } from "../fonts/fonts";

import "./sass-main.css";

export const metadata: Metadata = {
	title: "UMN Solutions",
	description: "Leading Data Solutions",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={fontVariables}>{children}</body>
		</html>
	);
}

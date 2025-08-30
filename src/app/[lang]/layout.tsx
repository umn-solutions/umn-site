import type { Metadata } from "next";

import { fontVariables } from "../../fonts/fonts";

import "../sass-main.css";
import { i18n, Locale } from "@/i18n/i18n.config";

export const metadata: Metadata = {
	title: "UMN Solutions",
	description: "Leading Data Solutions",
	metadataBase: new URL("https://umnsolutions.net"),
	openGraph: {
		type: "website",
		url: "/",
		title: "UMN Solutions — Leading Data Solutions",
		description: "Leading Data Solutions",
		images: [
			{ url: "/og.jpg", width: 1200, height: 630, alt: "UMN Solutions" },
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "UMN Solutions — Leading Data Solutions",
		description: "Leading Data Solutions",
		images: ["/og.jpg"],
	},
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: Locale }>;
}>) {
	const lang = (await params).lang;

	return (
		<html lang={lang}>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, viewport-fit=cover"
				/>
			</head>
			<body className={fontVariables}>{children}</body>
		</html>
	);
}

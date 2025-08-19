import localFont from "next/font/local";

export const aptos = localFont({
	src: [
		{ path: "./fonts/Aptos-Regular.woff2", weight: "400", style: "normal" },
		{ path: "./fonts/Aptos-Bold.woff2", weight: "700", style: "normal" }, // was 900; likely 700
	],
	display: "swap",
	preload: true,
	fallback: ["system-ui", "Segoe UI", "Arial"],
	variable: "--font-aptos",
});

export const mescla = localFont({
	src: [
		{
			path: "./fonts/Mescla-Regular.woff2",
			weight: "400",
			style: "normal",
		},
	],
	display: "swap",
	preload: true,
	fallback: ["system-ui", "Helvetica", "Arial"],
	variable: "--font-mescla",
});

export const fontVariables = `${aptos.variable} ${mescla.variable}`;

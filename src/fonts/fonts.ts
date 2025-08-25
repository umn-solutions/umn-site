import localFont from "next/font/local";

export const aptos = localFont({
	src: [
		{ path: "./Aptos.ttf", weight: "400", style: "normal" },
		{ path: "./Aptos-Bold.ttf", weight: "700", style: "normal" }, 
	],
	display: "swap",
	preload: true,
	fallback: ["system-ui", "Segoe UI", "Arial"],
	variable: "--font-aptos",
});

export const mescla = localFont({
	src: [
		{
			path: "./mescla_bold.ttf",
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

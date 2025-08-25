"use client";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import BlueText from "@/media/UMN-text-blue.png";
import WhiteText from "@/media/UMN-text-white.png";
import Image from "next/image";

type Theme = "light" | "dark";

export default function UMNLogoText({
	sectionThemes = ["light", "dark", "light", "dark", "light"],
}: {
	sectionThemes?: Theme[];
}) {
	const [theme, setTheme] = useState<Theme>("light");
	const lastIndexRef = useRef<number>(-1);

	const stops = useMemo(() => {
		const n = sectionThemes.length;
		if (n <= 1) return [0]; // degenerate, but safe
		const s: number[] = [];
		for (let k = 0; k < n; k++) s.push(k / n);
		return s;
	}, [sectionThemes]);

	const scrollTargetRef = useRef<HTMLElement | null>(null);
	useEffect(() => {
		if (!scrollTargetRef.current) {
			scrollTargetRef.current = document.body;
		}
	}, [scrollTargetRef]);

	const { scrollYProgress } = useScroll({ container: scrollTargetRef }); // body/viewport

	useMotionValueEvent(scrollYProgress, "change", (v) => {
		// Find the last stop <= v (binary search would be fine; linear is ok for small N)
		let idx = 0;
		for (let i = 0; i < stops.length; i++) {
			if (v >= stops[i]) idx = i;
			else break;
		}
		if (idx !== lastIndexRef.current) {
			lastIndexRef.current = idx;
			const next = sectionThemes[idx] ?? "light";
			setTheme((prev: Theme) => (prev === next ? prev : next));
		}
	});

	// Optional: ensure initial theme matches initial scroll position
	useEffect(() => {
		const v = scrollYProgress.get();
		let idx = 0;
		for (let i = 0; i < stops.length; i++) {
			if (v >= stops[i]) idx = i;
			else break;
		}
		lastIndexRef.current = idx;
		setTheme(sectionThemes[idx] ?? "light");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<motion.span
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.25 }}
			className={`umn-logo-text umn-logo-text--${theme}`}
		>
			<Image
				src={theme === "dark" ? BlueText : WhiteText}
				alt="UMN"
			/>
		</motion.span>
	);
}

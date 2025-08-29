"use client";
import Image from "next/image";
import UMNLogo_White from "@/media/logo2.svg";
import { motion } from "motion/react";
export default function UMNLogo({
	repeatAnimation = false,
	duration = 0.75,
	delay = 0.125,
}: {
	repeatAnimation?: boolean;
	duration?: number;
	delay?: number;
}) {
	return (
		<motion.div
			className="umn-logo"
			initial={{ scale: 0.75, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			exit={{
				scale: 0.75,
				opacity: 0,
				transition: { duration: 0, delay: 0 },
			}}
			transition={{ duration, delay, ease: "easeOut" }}
			viewport={{ once: !repeatAnimation }}
		>
			<Image
				src={UMNLogo_White}
				alt="UMN Logo"
				priority
				placeholder="empty"
			/>
		</motion.div>
	);
}

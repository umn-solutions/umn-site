import { MotionProps } from "motion/react";

export const fadeInMotionProps: MotionProps = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
	transition: { duration: 0.5, delay: 0, ease: "easeOut" },
	viewport: { amount: "some", once: true },
};
export const fadeSlideInMotionProps: MotionProps = {
	initial: { opacity: 0, y: 35 },
	whileInView: { opacity: 1, y: 0 },
	transition: { duration: 0.75, delay: 0, ease: "easeOut" },
	viewport: { amount: "some", once: true },
};

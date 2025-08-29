"use client";
import MainSection from "@/components/containers/MainSection";
import UMNLogo from "@/components/misc/UMNLogo";
import { DictionaryContentType } from "@/i18n/i18n.config";
import BgImg from "@/media/abstract_bg.png";
import Image from "next/image";
import { easeInOut, motion } from "motion/react";
import { fadeInMotionProps } from "@/components/utils/motionPresets";
export default function ContactUs({
	dictionary,
}: {
	dictionary: DictionaryContentType["contact-us"];
}) {
	return (
		<MainSection className="contact-us">
			<Image
				className="contact-us__bg"
				src={BgImg}
				alt=""
			/>
			<UMNLogo repeatAnimation />
			<motion.p
				{...fadeInMotionProps}
				transition={{
					...fadeInMotionProps.transition,
					delay: 1,
					duration: 1,
					ease: "easeInOut",
				}}
				viewport={{ once: false }}
				className="contact-us__cta"
			>
				We don’t seek <span className="umn_gray">clients</span>. We seek{" "}
				<span className="umn_gold">visionary partners</span>
			</motion.p>
			<motion.p
				{...fadeInMotionProps}
				transition={{
					...fadeInMotionProps.transition,
					duration: 1.5,
					delay: 1.5,
					ease: "easeInOut",
				}}
				viewport={{ once: false }}
				className="contact-us__cta"
			>
				Technology exists <span className="umn_gold">to empower</span>, 
				<span className="umn_gray"> not overshadow</span>
			</motion.p>
		</MainSection>
	);
}

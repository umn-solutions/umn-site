"use client";
import Image from "next/image";
import UMNLogo_White from "../../media/UMN-RGB_White.png";
import React from "react";
import { ArrowDownDoubleIcon } from "@/components/misc/Icon";
import MainSection from "@/components/containers/MainSection";
import { DictionaryContentType } from "@/i18n/i18n.config";
import UMNTitle from "@/components/typography/UMNTitle";
import GilGaspar from "@/media/gilgaspar.png";
import UMNLogoText from "@/components/misc/UMNLogoText";
import { AnimatePresence, motion, MotionProps } from "motion/react";
import {
	fadeInMotionProps,
	fadeSlideInMotionProps,
} from "@/components/utils/motionPresets";
export default function Team({
	dictionary,
}: {
	dictionary: DictionaryContentType["team"];
}) {
	const applyDelay = (delay: number, props: MotionProps) => {
		if (props.transition) props.transition.delay = delay;
		return props;
	};

	return (
		<MainSection className="team">
			<motion.div
				{...fadeInMotionProps}
				className="team__title"
			>
				<UMNTitle variant="dark">{dictionary.title}</UMNTitle>
			</motion.div>
			<motion.div
				{...applyDelay(0.55, fadeInMotionProps)}
				className="team__text-wrapper"
			>
				<p className="team__text">
					Our strength is hUMaN. We are a collective of strategists,
					scientists, and creators bound by a single conviction:{" "}
					<span className="umn_gold">
						 technology should serve people, not replace them.
					</span>
				</p>
				<p className="team__text">
					Led by Gil Gaspar, whose vision unites data mastery with
					human insight, we embrace only challenges that demand
					precision, creativity, and absolute discretion.
				</p>
			</motion.div>
			<motion.div
				{...applyDelay(0.65, fadeSlideInMotionProps)}
				className="team__photo"
			>
				<Image
					src={GilGaspar}
					alt="Gil Gaspar - CEO"
				/>
			</motion.div>
		</MainSection>
	);
}

import MainSection from "@/components/containers/MainSection";
import SliderCard from "@/components/containers/SliderCard/SliderCard";
import UMNLogoText from "@/components/misc/UMNLogoText";
import UMNTitle from "@/components/typography/UMNTitle";
import { DictionaryContentType } from "@/i18n/i18n.config";

export default function WhatWeDo({
	dictionary,
}: {
	dictionary: DictionaryContentType["whatwedo"];
}) {
	return (
		<MainSection className="whatwedo">
			{/* <SlidingSection dictionary={dictionary["topics"]} /> */}

			<SliderCard {...dictionary} />
		</MainSection>
	);
}

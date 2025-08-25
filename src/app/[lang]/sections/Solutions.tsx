import Carrousel from "@/components/containers/CarrouselItem";
import MainSection from "@/components/containers/MainSection";
import UMNLogoText from "@/components/misc/UMNLogoText";
import UMNPattern from "@/components/misc/UMNPattern";
import UMNTitle from "@/components/typography/UMNTitle";
import { EmblaOptionsType } from "embla-carousel";
import { DictionaryContentType } from "@/i18n/i18n.config";
import EmblaCarousel from "@/components/containers/EmblaCarousel/EmblaCarousel";
export default function Solutions({
	dictionary,
}: {
	dictionary: DictionaryContentType["solutions"];
}) {
	const OPTIONS: EmblaOptionsType = { loop: true };
	return (
		<MainSection className="solutions">
			<UMNPattern />
			<UMNTitle variant="light">{dictionary.title}</UMNTitle>
			<EmblaCarousel
				slides={dictionary.topics}
				options={OPTIONS}
			/>
		</MainSection>
	);
}

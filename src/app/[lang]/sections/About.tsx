import MainSection from "@/components/containers/MainSection";
import UMNLogoText from "@/components/misc/UMNLogoText";
import { DictionaryContentType } from "@/i18n/i18n.config";

export default function About({
	dictionary,
}: {
	dictionary: DictionaryContentType["about"];
}) {
	return (
		<MainSection className="about">
			<div className="about__scrollable">
				<Heading dictionary={dictionary["heading-text"]} />
				{dictionary.text.map((text, i) => (
					<p key={`about-text-${i}`}>{text}</p>
				))}
			</div>
		</MainSection>
	);
}

const Heading = ({
	dictionary,
}: {
	dictionary: DictionaryContentType["about"]["heading-text"];
}) => {
	const [upperHeadingTextP1, upperHeadingTextP2] = dictionary[0].split(" "),
		[lowerHeadingTextP1, lowerHeadingTextP2] = dictionary[1].split(" ");

	return (
		<div className="about__heading">
			<span>
				<h2>{upperHeadingTextP1}</h2>
				<h2 className="about__heading--gold">{upperHeadingTextP2}</h2>
			</span>
			<span>
				<h2>{lowerHeadingTextP1}</h2>
				<h2 className="about__heading--gold">{lowerHeadingTextP2}</h2>
			</span>
		</div>
	);
};

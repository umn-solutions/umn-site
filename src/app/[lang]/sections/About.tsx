import FadeInImage from "@/components/containers/FadeInImage";
import MainSection from "@/components/containers/MainSection";
import { DictionaryContentType } from "@/i18n/i18n.config";
import EyeBg from "@/media/eye-bg.png";
export default function About({
	dictionary,
}: {
	dictionary: DictionaryContentType["about"];
}) {
	return (
		<MainSection className="about">
			<FadeInImage
				src={EyeBg}
				className="about__bg"
			/>
			<div className="about__scrollable">
				<div className="about__text">
					<span>
						Building a future where technology{" "}
						<span className="umn_gold">serves</span>, data{" "}
						<span className="umn_gold">guides</span>, and humans{" "}
						<span className="umn_gold">lead the way</span>
					</span>
				</div>

				<div className="about__text">
					<span>
						We turn complex data and automation into systems that{" "}
						<span className="umn_gold">sharpen</span> decisions,{" "}
						<span className="umn_gold">elevate</span> performance
						and <span className="umn_gold">unlock</span> potential
					</span>
				</div>

				<div className="about__text">
					<span>
						Every project is tailored with{" "}
						<span className="umn_gold">precision</span> and driven
						by <span className="umn_gold">purpose</span>, solving{" "}
						<span className="umn_gold">challenges that matter</span>{" "}
						and creating{" "}
						<span className="umn_gold">futures that last</span>
					</span>
				</div>

				<div className="about__text">
					<span>
						At the center, always
						<span className="umn_gold"> Human</span>
					</span>
				</div>
			</div>
		</MainSection>
	);
}

import MainSection from "@/components/containers/MainSection";
import { ArrowDownDoubleIcon } from "@/components/misc/Icon";
import UMNLogo from "@/components/misc/UMNLogo";
import { DictionaryContentType } from "@/i18n/i18n.config";

export default function Landing({
	dictionary,
}: {
	dictionary: DictionaryContentType["landing"];
}) {
	return (
		<MainSection className="landing">
			<UMNLogo />
			<div className="landing__scroll-down">
				<h4>{dictionary["scroll-down"]}</h4>
				{ArrowDownDoubleIcon}
			</div>
		</MainSection>
	);
}

import MainSection from "@/components/containers/MainSection";
import UMNLogo from "@/components/misc/UMNLogo";
import UMNLogoText from "@/components/misc/UMNLogoText";
import { DictionaryContentType } from "@/i18n/i18n.config";
import BgImg from "@/media/Automation and Low code.jpg";
import Image from "next/image";
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
			<UMNLogo repeatAnimation/>
		</MainSection>
	);
}

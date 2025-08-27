import MainSection from "@/components/containers/MainSection";
import UMNLogo from "@/components/misc/UMNLogo";
import UMNLogoText from "@/components/misc/UMNLogoText";
import { DictionaryContentType } from "@/i18n/i18n.config";
import BgImg from "@/media/abstract_bg.png";
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
			<UMNLogo repeatAnimation />
			<p className="contact-us__cta">
				We don’t seek <span className="umn_gray">clients</span>. We seek{" "}
				<span className="umn_gold">visionary partners</span>.
			</p>
			<p className="contact-us__cta">
				Technology exists <span className="umn_gold">to empower</span>,
				<span className="umn_gray">not overshadow</span>.
			</p>
		</MainSection>
	);
}

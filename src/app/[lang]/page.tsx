import ContactButton from "@/components/buttons/ContactButton";
import UMNLogoText from "@/components/misc/UMNLogoText";
import { getDictionary, Locale } from "@/i18n/i18n.config";
import About from "./sections/About";
import ContactUs from "./sections/ContactUs";
import Solutions from "./sections/Solutions";
import Team from "./sections/Team";
import WhatWeDo from "./sections/WhatWeDo";

export default async function Home({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const lang = (await params).lang;
	const dictionary = await getDictionary(lang);

	return (
		<>
			<UMNLogoText />
			{/* <Landing dictionary={dictionary.landing} /> */}
			<About dictionary={dictionary.about} />
			<WhatWeDo dictionary={dictionary.whatwedo} />
			<Solutions dictionary={dictionary.solutions} />
			<Team dictionary={dictionary.team} />
			<ContactUs dictionary={dictionary["contact-us"]} />
			<ContactButton dictionary={dictionary.common} />
		</>
	);
}

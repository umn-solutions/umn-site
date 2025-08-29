import { DictionaryContentType } from "@/i18n/i18n.config";
import { PhoneLineIcon } from "../misc/Icon";

export default function ContactButton({
	dictionary,
}: {
	dictionary: DictionaryContentType["common"];
}) {
	return (
		<div className="contact-btn">
			<span className="contact-btn__text">
				{dictionary["contact-us"]}
			</span>
			<a
				// href="mailto:umn.infocontact@gmail.com?subject=Partnership%20Proposal"
				href="https://calendly.com/umn-infocontact/30min"
				target="_blank"
				className="contact-btn__book"
			>
				{PhoneLineIcon}
				{dictionary["book-call"]}
			</a>
		</div>
	);
}

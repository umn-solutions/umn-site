export interface StyledTextProps {
	children: string | string[];
	className?: string;
}

const STYLES = ["bold", "italic", "bold_italic", "umn_gold"];

const HAS_STYLES_REGEX = /<breakpoint>/gi;
const STYLES_REGEX = new RegExp(STYLES.map((e) => `<${e}>`).join("|"), "gi");

function parseParagraph(data: string) {
	//No style tags
	if (!HAS_STYLES_REGEX.test(data)) {
		return data;
	}

	//Represents a paragraph split into styled and non styled parts
	const paragraphAsArr = data.split(HAS_STYLES_REGEX);
	let parsedParagraphHTML = [];

	for (const partIndex in paragraphAsArr) {
		const part = paragraphAsArr[partIndex];
		//test for styled part
		const styleMatch = part.match(STYLES_REGEX) || [];
		const hasStyle = styleMatch?.length > 0,
			wrongFormat = styleMatch?.length > 1,
			style = styleMatch?.[0] || "",
			styleName = style.match(/[A-z]+/g)?.[0] as string;

		if (wrongFormat)
			throw new Error(
				"Encountered invalid JSON text. Multiple styles should be separated with multiple breakpoint tags."
			);
		//regular text
		if (!hasStyle) {
			parsedParagraphHTML.push(<span key={partIndex}>{part}</span>);
			continue;
		}
		//text with style
		parsedParagraphHTML.push(
			<span
				key={partIndex}
				className={styleName}
			>
				{" "+part.replace(style, "")+" "}
			</span>
		);
	}
	return parsedParagraphHTML;
}

export default function StyledText({
	children,
	className = "",
}: StyledTextProps) {
	//multiline text -> string[]
	if (Array.isArray(children)) {
		/*
            parse children (bolds|italics|boldItalic)
            This is an example <breakpoint><bold>paragraph                   
            This <breakpoint><bold>second<breakpoint> example is also valid 
        */
		return (
			<span className={`styled-text ${className}`}>
				{children.map((line, i) => parseParagraph(line))}
			</span>
		);
	}
	//single line text -> string
	else {
		return <p className={`styled-text ${className}`}> {parseParagraph(children)}</p>;
	}
}

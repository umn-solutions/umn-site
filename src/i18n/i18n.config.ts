export const i18n = {
	defaultLocale: "en",
	locales: ["en", "pt"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

const dictionaries = {
	en: () => import("./dictionaries/en.json").then((module) => module.default),
	pt: () => import("./dictionaries/pt.json").then((module) => module.default),
};

// Infer the type of the 'dictionaries' object
type DictionariesType = typeof dictionaries;

// Infer the return type of each function (which is a Promise)
type DictionaryPromiseType<T extends keyof DictionariesType> = ReturnType<
	DictionariesType[T]
>;

// Infer the type that the Promise resolves to (the actual dictionary object)
type DictionaryValueType<T extends keyof DictionariesType> = Awaited<
	DictionaryPromiseType<T>
>;
export type DictionaryContentType = DictionaryValueType<"en">;

export type DictionarySectionContentType<
	T extends keyof DictionaryContentType
> = DictionaryContentType[T];

export const getDictionary = async (
	locale: Locale
): Promise<DictionaryContentType> =>
	dictionaries[locale]?.() ?? dictionaries[i18n.defaultLocale]();

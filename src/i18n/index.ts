import english from '@/i18n/locales/en.json';
import spanish from '@/i18n/locales/es.json';

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = 'en',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.SPANISH) return {...english,...spanish};
	return english;
};
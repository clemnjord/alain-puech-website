import React from 'react';
import {useParams} from 'next/navigation';
import {useLocale} from 'next-intl';
import {Locale} from '@/config';
import {usePathname, useRouter} from '@/navigation';

const LanguageSelector: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const currentLocale = useLocale() as Locale;

    // Function to handle language change
    const handleLanguageChange = (locale: Locale) => {
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            // Comment from next-intl
            {pathname, params},
            {locale: locale}
        );
    };

    return (
        <div className="flex space-x-2">
            <button
                type="button"
                className={`${
                    currentLocale === 'fr' ? 'font-bold' : 'font-normal'
                } focus:outline-none`}
                onClick={() => handleLanguageChange('fr')}
            >
                FR
            </button>
            <span>|</span>
            <button
                type="button"
                className={`${
                    currentLocale === 'en' ? 'font-bold' : 'font-normal'
                } focus:outline-none`}
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSelector;

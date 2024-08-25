import {LocalePrefix, Pathnames} from 'next-intl/routing';

export const localePrefix = 'always' satisfies LocalePrefix;

// A list of all locales that are supported
export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

// The `pathnames` object holds pairs of internal and
// external paths. Based on the locale, the external
// paths are rewritten to the shared, internal ones.
export const pathnames = {
    // If all locales use the same pathname, a single
    // external path can be used for all locales
    '/': '/',

    // If locales use different paths, you can
    // specify each external path per locale
    '/biography': {
        en: '/biography',
        fr: '/biographie',
    },

    '/other-works': {
        en: '/other-works',
        fr: '/autres-œuvres',
    },

    '/self-portraits': {
        en: '/self-portraits',
        fr: '/auto-portraits',
    },
} satisfies Pathnames<typeof locales>;

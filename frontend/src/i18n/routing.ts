import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'fr'],

    // Used when no locale matches
    defaultLocale: 'en',

    localePrefix: 'always',

    pathnames: {
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

        '/self-portraits/daily-view': {
            en: '/self-portraits/daily-view',
            fr: '/auto-portraits/vue-jour',
        },

        '/self-portraits/daily-view/[month]/[day]': {
            en: '/self-portraits/daily-view/[month]/[day]',
            fr: '/auto-portraits/vue-jour/[month]/[day]',
        },

        '/self-portraits/daily-view/[month]-[day]': {
            en: '/self-portraits/daily-view/[month]-[day]',
            fr: '/auto-portraits/vue-jour/[month]-[day]',
        },
    },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation(routing);
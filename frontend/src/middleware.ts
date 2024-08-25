import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {locales, pathnames} from './config';

const nextIntlMiddleware = createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix: 'always',
    pathnames: pathnames,
});

export default function (req: NextRequest): NextResponse {
    return nextIntlMiddleware(req);
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(fr|en)/:path*'],
};

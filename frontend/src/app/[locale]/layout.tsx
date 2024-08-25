import {Inter} from 'next/font/google';
import './globals.css';
import {Navbar} from './components/Navbar';
import Footer from './components/Footer';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import React from 'react';
import {getTranslations} from 'next-intl/server';
import {Locale} from '@/config';

const inter = Inter({subsets: ['latin']});

type Props = {
    children: React.ReactNode;
    params: {
        locale: Locale;
    };
};

export async function generateMetadata({params: {locale}}: Props) {
    const t = await getTranslations({locale});

    return {
        title: t('common.title'),
        description: t('common.siteDescription'),
    };
}

const RootLayout: React.FC<Props> = ({children, params: {locale}}) => {
    const messages = useMessages();

    return (
        <html lang={locale}>
            <body className="min-h-screen flex flex-col">
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    <main className="pt-16 flex-grow bg-black">{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default RootLayout;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar} from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alain PUECH - Artiste/Plasticien",
    description: "Site internet d'Alain PUECH   ",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col">
        <Navbar/>

        <main className="pt-16 flex-grow bg-black"> {/* Adjust this padding to match navbar height */}
            {children}
        </main>
        <Footer/>
        </body>
        </html>

)
    ;
}

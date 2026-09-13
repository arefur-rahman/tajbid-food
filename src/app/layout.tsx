import {
    constructMetadata,
    constructViewport,
    SiteConfig,
} from "@/lib/metadata";
import type { Metadata, Viewport } from "next";
import { Inter, Crimson_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const fontSerif = Crimson_Pro({
    subsets: ["latin"],
    variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const siteConfig: SiteConfig = {
    baseUrl: "https://site_url.com",
    siteName: "TAJBID FOOD",
    title: "TAJBID",
    description: "Site description",
    ogImage: "/brand_logo_xl.png",
    twitterHandle: "@brandname",
    authorName: "Arefur Rahman Khan",
    portfolioUrl: "http://arefolio.vercel.app/",
    locale: "en_US",
    themeColor: "#F8F3EC",
    keywords: ["keyword1", "keyword2", "keyword3"],
};

export const metadata: Metadata = constructMetadata(siteConfig);
export const viewport: Viewport = constructViewport(siteConfig);

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}

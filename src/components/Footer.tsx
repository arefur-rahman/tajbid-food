import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandWhatsapp,
    IconLeaf,
    IconMail,
    IconMapPin,
    IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer
            className="relative w-full bg-[#183B32] text-stone-200"
            role="contentinfo"
        >
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                {/* Top Grid */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4 lg:col-span-5">
                        <Link
                            href="/"
                            className="group inline-flex items-center"
                            aria-label="Tajbid Food Home"
                        >
                            <Image
                                src={"/tajbid_logo.png"}
                                width={155}
                                height={50}
                                draggable={false}
                                alt="tajbid food logo"
                                className="object-contain brightness-0 invert transition-opacity duration-200 group-hover:opacity-85"
                            />
                        </Link>

                        <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-stone-300/90 font-light">
                            Natural food, thoughtfully sourced and shared with
                            faith. Bringing 100% pure, chemical-free and
                            sun-ripened organic goodness from Bangladesh and
                            blessed origins.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Tajbid Food on Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-stone-300 transition-all duration-200 hover:border-emerald-300/40 hover:bg-white/15 hover:text-white active:scale-95"
                            >
                                <IconBrandFacebook className="h-4 w-4" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Tajbid Food on Instagram"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-stone-300 transition-all duration-200 hover:border-emerald-300/40 hover:bg-white/15 hover:text-white active:scale-95"
                            >
                                <IconBrandInstagram className="h-4 w-4" />
                            </a>
                            <a
                                href="https://wa.me"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Chat with Tajbid Food on WhatsApp"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-stone-300 transition-all duration-200 hover:border-emerald-300/40 hover:bg-white/15 hover:text-white active:scale-95"
                            >
                                <IconBrandWhatsapp className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
                        {/* Column 1: Explore */}
                        <div className="space-y-3">
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                                Explore
                            </h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-stone-300/85 transition-colors hover:text-white"
                                    >
                                        Shop All
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-stone-300/85 transition-colors hover:text-white"
                                    >
                                        Best Sellers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-stone-300/85 transition-colors hover:text-white"
                                    >
                                        Pure Honey
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-stone-300/85 transition-colors hover:text-white"
                                    >
                                        Cold-Pressed Oils
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-stone-300/85 transition-colors hover:text-white"
                                    >
                                        Our Story
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Help */}
                        <div className="space-y-3">
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                                Help & Info
                            </h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-stone-300/85 transition-colors hover:text-white"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-stone-300/85 transition-colors hover:text-white"
                                    >
                                        Delivery & Returns
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-stone-300/85 transition-colors hover:text-white"
                                    >
                                        Track Order
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-stone-300/85 transition-colors hover:text-white"
                                    >
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-stone-300/85 transition-colors hover:text-white"
                                    >
                                        Quality Guarantee
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Visit Us */}
                        <div className="col-span-2 space-y-3 sm:col-span-1">
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                                Visit Us
                            </h3>
                            <div className="space-y-2 text-xs sm:text-sm text-stone-300/85">
                                <div className="flex items-start gap-2">
                                    <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                                    <span>
                                        House 12, Road 4, Banani,
                                        <br />
                                        Dhaka 1213, Bangladesh
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 pt-1">
                                    <IconPhone className="h-4 w-4 shrink-0 text-emerald-400" />
                                    <a
                                        href="tel:+8801700000000"
                                        className="hover:text-white transition-colors"
                                    >
                                        +880 1700-000000
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <IconMail className="h-4 w-4 shrink-0 text-emerald-400" />
                                    <a
                                        href="mailto:hello@tajbidfood.com"
                                        className="hover:text-white transition-colors"
                                    >
                                        hello@tajbidfood.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-stone-400">
                    <p>
                        © {new Date().getFullYear()} TAJBID Food. Made with
                        faith and purity.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="#"
                            className="transition-colors hover:text-stone-200"
                        >
                            Privacy Policy
                        </Link>
                        <span>•</span>
                        <Link
                            href="#"
                            className="transition-colors hover:text-stone-200"
                        >
                            Terms of Service
                        </Link>
                        <span>•</span>
                        <Link
                            href="#"
                            className="transition-colors hover:text-stone-200"
                        >
                            Shipping Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import { Button } from "@/components/ui/button";
import { IconHeart, IconSearch, IconShoppingBag } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

function TopNavBar() {
    const navLinks = [
        {
            id: "01",
            href: "#",
            label: "Shop",
        },
        {
            id: "02",
            href: "#",
            label: "Our Story",
        },
        {
            id: "03",
            href: "#",
            label: "why tajbid",
        },
        {
            id: "04",
            href: "#",
            label: "Journal",
        },
    ];
    return (
        <div className="border-b border-primary/10 bg-background/40 backdrop-blur-xs w-full">
            <nav className="max-w-7xl mx-auto flex items-center justify-around px-5 py-5">
                <Link href={"/"}>
                    <Image
                        src={"/tajbid_logo.png"}
                        width={155}
                        height={50}
                        draggable={false}
                        alt="tajbid food logo"
                        className="object-cover"
                    />
                </Link>
                <div className="space-x-9">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link?.id}
                            href={link?.href}
                            label={link?.label}
                        />
                    ))}
                </div>
                <div className="space-x-2">
                    <Button variant="outline" className="rounded-md">
                        <IconSearch stroke={2} />
                    </Button>
                    <Button variant="outline" className="rounded-md">
                        <IconHeart stroke={2} />
                    </Button>
                    <Button variant="outline" className="rounded-md">
                        <IconShoppingBag stroke={2} />
                    </Button>
                </div>
            </nav>
        </div>
    );
}

export default TopNavBar;

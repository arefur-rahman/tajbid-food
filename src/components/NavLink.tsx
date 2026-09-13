"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, label }: { href: string; label: string }) {
    const pathName = usePathname();
    console.log(pathName);

    const isActive = pathName === href;

    return (
        <Link
            href={href}
            className={`hover:underline text-lg ${isActive ? "text-primary font-semibold" : "text-foreground font-medium"}`}
        >
            {label}
        </Link>
    );
}

export default NavLink;

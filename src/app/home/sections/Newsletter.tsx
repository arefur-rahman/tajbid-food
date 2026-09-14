"use client";

import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import * as React from "react";

export default function Newsletter() {
    const [email, setEmail] = React.useState("");
    const [isSubscribed, setIsSubscribed] = React.useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !email.includes("@")) return;
        setIsSubscribed(true);
        setEmail("");
    };

    return (
        <section
            className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
            aria-label="Newsletter Subscription"
        >
            <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-linear-to-br from-[#F6EFE5] via-[#F2EAE0] to-[#EBE0D2] p-6 sm:p-10 lg:p-12 shadow-md shadow-stone-200/50">
                {/* Decorative background accent */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/5 blur-2xl" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-secondary/10 blur-2xl" />

                <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                    <div className="space-y-2 lg:col-span-7">
                        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                            A Healthier Ritual Awaits
                        </p>
                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
                            Bring home the good.
                        </h2>
                        <p className="max-w-xl text-xs sm:text-sm text-stone-700 leading-relaxed">
                            Sign up for thoughtful recipes, new harvests,
                            seasonal offers, and a little more goodness
                            delivered straight to your inbox.
                        </p>
                    </div>

                    <div className="lg:col-span-5">
                        {isSubscribed ? (
                            <div className="flex items-center gap-2.5 rounded-full bg-white/90 px-5 py-3 text-primary shadow-xs">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                                    <IconCheck className="h-4 w-4 stroke-3" />
                                </div>
                                <p className="text-xs sm:text-sm font-medium">
                                    Welcome to Tajbid! Check your inbox soon.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubscribe}
                                className="relative flex items-center"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    required
                                    aria-label="Email address for newsletter"
                                    className="w-full rounded-full border border-stone-300/80 bg-white/95 px-5 py-3 pr-28 text-xs sm:text-sm text-foreground placeholder:text-stone-700 shadow-inner focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1.5 inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-xs transition-all hover:bg-primary/90 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                    <span>Join us</span>
                                    <IconArrowRight className="h-3.5 w-3.5" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

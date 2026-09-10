import { CopyButton } from "@/app/copy-button";
import {
    ArrowRight,
    Code2,
    Database,
    FileCode,
    Layers,
    Play,
    Sparkles,
    Terminal,
} from "lucide-react";

export default function Home() {
    const steps = [
        {
            step: "01",
            title: "Install Dependencies",
            description:
                "Install all project packages and tooling dependencies.",
            icon: Terminal,
            code: "pnpm install",
            type: "bash",
        },
        {
            step: "02",
            title: "Configure Environment Variables",
            description:
                "Set your database connection string in the .env file.",
            icon: Database,
            code: 'DATABASE_URL="your-database-connection-string"',
            badge: ".env",
            type: "env",
        },
        {
            step: "03",
            title: "Define Database Models",
            description:
                "Add your data models in prisma/schema.prisma (defaults to MongoDB provider).",
            icon: FileCode,
            code: `model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  email String @unique
}`,
            badge: "prisma/schema.prisma",
            type: "prisma",
        },
        {
            step: "04",
            title: "Sync Database Schema",
            description:
                "Pushes schema changes to the database and generates the Prisma Client automatically.",
            icon: Sparkles,
            code: "pnpm run db-push",
            type: "bash",
        },
        {
            step: "05",
            title: "Start Development Server",
            description:
                "Start the local Next.js development server on http://localhost:3000.",
            icon: Play,
            code: "pnpm dev",
            type: "bash",
        },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-50 antialiased">
            <main className="flex flex-1 flex-col items-center px-6 py-16 sm:py-24 lg:px-8 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-950/50 via-slate-950 to-slate-950" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-indigo-500/15 blur-[140px] rounded-full -z-10" />

                {/* Hero Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-300 ring-1 ring-indigo-500/20 bg-indigo-500/10 backdrop-blur-md">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                            Next.js 16 + Tailwind v4 + Prisma Template Ready
                        </div>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-linear-to-r from-slate-100 via-slate-200 to-slate-400 pb-2">
                        Build something amazing
                    </h1>

                    <p className="mt-4 text-base sm:text-lg leading-7 text-slate-400 max-w-2xl mx-auto">
                        Your production-ready Next.js starter template. Follow
                        the startup checklist below to configure your database
                        and start coding.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="#checklist"
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all active:scale-95"
                        >
                            Startup Instructions
                            <ArrowRight className="size-4" />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>

                {/* Startup Instructions Checklist */}
                <div
                    id="checklist"
                    className="mt-20 w-full max-w-4xl scroll-mt-10"
                >
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-8">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
                                Startup Checklist
                            </h2>
                            <p className="text-sm text-slate-400 mt-1">
                                Complete these steps to bootstrap your project
                            </p>
                        </div>
                        <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                            5 Steps
                        </span>
                    </div>

                    <div className="space-y-4">
                        {steps.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={item.step}
                                    className="group rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 sm:p-6 backdrop-blur-md transition-all hover:border-indigo-500/30 hover:bg-slate-900/70"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                                            <span className="font-mono text-xs sm:text-sm font-semibold text-indigo-400/80 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                                                {item.step}
                                            </span>
                                            <div className="p-2 rounded-lg bg-slate-800/80 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                                                <IconComponent className="size-5" />
                                            </div>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="text-base font-semibold text-slate-200">
                                                    {item.title}
                                                </h3>
                                                {item.badge && (
                                                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-slate-400 mt-1">
                                                {item.description}
                                            </p>

                                            {/* Code / Command Block */}
                                            <div className="relative mt-3 rounded-lg bg-slate-950 border border-slate-800/80 p-3 pr-11 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto group/code">
                                                <pre className="whitespace-pre">
                                                    {item.code}
                                                </pre>
                                                <div className="absolute right-2 top-2">
                                                    <CopyButton
                                                        text={item.code}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Quick Reference Cards */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-md">
                            <div className="flex items-center gap-2.5 text-indigo-400 mb-2">
                                <Code2 className="size-5" />
                                <h3 className="text-sm font-semibold text-slate-200">
                                    Prisma Client Singleton
                                </h3>
                            </div>
                            <p className="text-xs text-slate-400 mb-3">
                                Pre-configured client ready to use in Server
                                Components, Actions, and Route Handlers:
                            </p>
                            <div className="relative rounded-lg bg-slate-950 border border-slate-800 p-2.5 pr-11 font-mono text-xs text-indigo-300">
                                <code>
                                    import &#123; prisma &#125; from
                                    &quot;@/lib/prisma&quot;;
                                </code>
                                <div className="absolute right-2 top-1.5">
                                    <CopyButton text='import { prisma } from "@/lib/prisma";' />
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-md">
                            <div className="flex items-center gap-2.5 text-indigo-400 mb-2">
                                <Layers className="size-5" />
                                <h3 className="text-sm font-semibold text-slate-200">
                                    shadcn/ui Components
                                </h3>
                            </div>
                            <p className="text-xs text-slate-400 mb-3">
                                Add customizable, accessible UI primitives at
                                any time via CLI:
                            </p>
                            <div className="relative rounded-lg bg-slate-950 border border-slate-800 p-2.5 pr-11 font-mono text-xs text-slate-300">
                                <code>pnpm dlx shadcn@latest add dialog</code>
                                <div className="absolute right-2 top-1.5">
                                    <CopyButton text="pnpm dlx shadcn@latest add dialog" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

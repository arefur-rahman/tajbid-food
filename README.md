# Next.js Full-Stack Starter Template

A modern, production-ready Next.js template pre-configured with **Tailwind CSS v4**, **shadcn/ui**, and **Prisma ORM**. Designed for rapid project bootstrapping without repetitive setup.

---

## ⚡ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI & Styling:** [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler.io/icons)
- **Database / ORM:** [Prisma ORM 6](https://www.prisma.io/) (Pre-configured client & schema)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)

---

## 🚀 Quick Start (Using This Template)

Follow these steps whenever starting a new project from this template:

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment Variables

Update the `DATABASE_URL` in your `.env` file with your database connection string:

```env
DATABASE_URL="your-database-connection-string-here"
```

> **Note:** The template defaults to MongoDB in `prisma/schema.prisma`. If using PostgreSQL, MySQL, SQLite, etc., adjust the provider accordingly in `prisma/schema.prisma`.

### 3. Define Database Models

Open [prisma/schema.prisma](file:///Users/mac-aref/Development/project-template/prisma/schema.prisma) and define your application models:

```prisma
datasource db {
  provider = "mongodb" // or "postgresql", "mysql", "sqlite", etc.
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
}
```

### 4. Push Schema to Database

Run the custom script to push your schema changes to your database and generate the Prisma Client automatically:

```bash
pnpm run db-push
```

### 5. Start the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Working with Prisma

### Pre-Configured Prisma Client

A ready-to-use Prisma Client instance is pre-configured in [src/lib/prisma.ts](file:///Users/mac-aref/Development/project-template/src/lib/prisma.ts). Import it directly anywhere in your server components, server actions, or API route handlers:

```ts
import { prisma } from "@/lib/prisma";

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}
```

### Schema Changes Workflow

Whenever you modify models or fields in [prisma/schema.prisma](file:///Users/mac-aref/Development/project-template/prisma/schema.prisma):

1. Edit your models in `prisma/schema.prisma`.
2. Run:
   ```bash
   pnpm run db-push
   ```
   This will sync your changes to the database and re-generate the Prisma client in `generated/prisma/`.

---

## 🎨 Adding UI Components (shadcn/ui)

You can add additional components using the shadcn CLI:

```bash
pnpm dlx shadcn@latest add <component-name>
```

Example:
```bash
pnpm dlx shadcn@latest add dialog
```

---

## 📁 Project Structure

```text
├── generated/            # Generated Prisma client
├── prisma/
│   └── schema.prisma     # Prisma schema & database models
├── prisma.config.ts      # Prisma runtime config
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router (pages, layouts, styles)
│   │   ├── globals.css   # Global CSS & Tailwind imports
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Landing page
│   ├── components/       # Reusable components
│   │   └── ui/           # shadcn/ui components (e.g. Button)
│   └── lib/              # Utilities & shared singletons
│       ├── prisma.ts     # Pre-configured Prisma client instance
│       └── utils.ts      # Utility functions (cn helper, etc.)
├── .env                  # Environment variables (DATABASE_URL)
├── package.json
└── tsconfig.json
```

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Next.js development server (cleans `.next` cache first) |
| `pnpm build` | Builds the application for production |
| `pnpm start` | Runs the built production server |
| `pnpm lint` | Runs ESLint checks |
| `pnpm run db-push` | Syncs Prisma schema with database and generates client |

---

## License

MIT

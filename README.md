# Vaam - Website
This repository contains the code for the Vaam website. Built with Next.js, Tailwind CSS, and shadcn/ui.


## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Authentication:** Supabase Auth
- **Database:** Supabase
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/vaam-software/vaam-website.git
cd vaam
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                 # App router pages
├── components/         
│   ├── global/         # Shared components
│   ├── supaauth/       # Authentication components
│   └── ui/             # UI components (shadcn)
├── lib/                # Utilities and constants
├── public/             # Static assets
└── styles/             # Global styles
```

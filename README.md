# Interconnect

A modern web application built with Next.js 15 and TypeScript, featuring a clean and responsive user interface powered by Tailwind CSS.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** 
  - Radix UI for accessible components
  - Framer Motion for animations
  - Lucide React for icons
- **Theme:** Dark/Light mode support via next-themes

## Features

- Modern and responsive design
- Type-safe development with TypeScript
- Accessible UI components using Radix UI
- Smooth animations with Framer Motion
- Dark/Light theme support
- ESLint configured for code quality

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development

Run the development server:

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
interconnect/
├── src/
│   ├── app/          # Next.js app directory
│   ├── components/   # Reusable UI components
│   └── lib/          # Utility functions and configurations
├── public/           # Static assets
└── ...config files
```

## Scripts

- `dev`: Run development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run ESLint

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Framer Motion Documentation](https://www.framer.com/motion/)

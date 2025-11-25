# Users Management Application

A Next.js application for managing and displaying team members with pagination support. Built for the Obmondo interview assessment.

## Project Requirements

This project was built following these specific requirements:

- ✅ **Framework:** Next.js with TypeScript
- ✅ **No External Libraries:** No additional JavaScript/React libraries used (only Next.js core features and built-in Tailwind CSS)

## Features

- Display paginated list of team members
- View user details including name, job title, email, and phone
- Quick email contact links

## Prerequisites

Before running this application, ensure you have:

- Node.js 18.x or higher
- npm or yarn package manager
- Environment variables configured (see below)

## Environment Variables

Create a `.env` file in the root directory:

```env
API_URL="https://give-me-users-forever.vercel.app/api/users/:page/next"
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
# Edit .env. with your API_URL
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

Built for Obmondo Interview Assessment

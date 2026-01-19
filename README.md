# 📚 Library App

A modern, full-featured library management system built with Next.js 16, featuring book browsing, loan management, user authentication, and administrative controls.

## ✨ Features

### 🔐 Authentication & Authorization

- User registration and login
- JWT-based authentication with secure token storage
- Role-based access control (User/Admin)
- Protected routes for authenticated users

### 📖 Book Management

- Browse books with search and filtering
- View detailed book information
- Category-based book organization
- Book reviews and ratings
- Author information

### 🛒 Loan System

- Shopping cart for book selection
- Checkout process for borrowing books
- Loan history tracking
- User profile with borrowed books

### 👤 User Features

- Personal profile management
- View loan history
- Manage borrowed books
- Update user information

### 🔧 Admin Features

- Admin dashboard
- User management
- Book catalog management
- Loan oversight

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Animations**: Motion (Framer Motion)
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query (React Query)
- **HTTP Client**: Axios

### Key Dependencies

- `@tanstack/react-query` - Server state management
- `@hookform/resolvers` - Form validation
- `axios` - HTTP requests
- `zod` - Schema validation
- `lucide-react` - Icon library
- `class-variance-authority` - Component variants
- `tailwind-merge` & `clsx` - Utility class management

### Development Tools

- ESLint - Code linting
- TypeScript - Type safety
- Tailwind CSS PostCSS - Styling

## 📁 Project Structure

```
library-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (public)/          # Public routes (login, register, home, books)
│   │   ├── (private)/         # Protected routes (cart, checkout, profile, admin)
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Landing page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── container/         # Layout components (Header, Footer, ErrorCard)
│   │   ├── layouts/           # Page layouts
│   │   └── ui/                # Reusable UI components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries
│   │   └── api/              # API configuration (axios instance)
│   ├── providers/             # Context providers
│   │   ├── AppProvider.tsx   # App-wide state provider
│   │   └── SearchProvider.tsx # Search functionality provider
│   ├── services/              # API service layers
│   │   ├── auth.service.ts
│   │   ├── books.service.ts
│   │   ├── authors.service.ts
│   │   ├── categories.service.ts
│   │   ├── loans.service.ts
│   │   ├── reviews.service.ts
│   │   └── me.service.ts
│   └── types/                 # TypeScript type definitions
│       ├── Auth.type.ts
│       ├── Books.type.ts
│       ├── Authors.type.ts
│       ├── Categories.type.ts
│       ├── Loans.type.ts
│       ├── Reviews.type.ts
│       ├── Me.type.ts
│       └── Global.type.ts
├── public/                    # Static assets
├── .env                       # Environment variables
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── eslint.config.mjs         # ESLint configuration
└── next.config.ts            # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd library-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   NEXT_PUBLIC_API_URL=https://be-library-api-xh3x6c5iiq-et.a.run.app
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Styling

This project uses:

- **Tailwind CSS 4** for utility-first styling
- **Quicksand** font from Google Fonts
- **Custom CSS variables** for theming
- **Radix UI** for accessible component primitives

## 🔒 Authentication Flow

1. Users register or log in through the authentication pages
2. JWT tokens are stored in localStorage
3. Axios interceptor automatically adds the token to API requests
4. Protected routes check authentication status
5. Admin routes verify admin role

## 🌐 API Integration

The app connects to a backend API hosted at:

```
https://be-library-api-xh3x6c5iiq-et.a.run.app
```

All API calls are managed through service layers in the `src/services/` directory, using a configured Axios instance with automatic token injection.

## 📦 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Add your environment variables
4. Deploy!

Vercel will automatically detect Next.js and configure the build settings.

### Other Platforms

You can also deploy to:

- **Netlify** - Configure build command: `npm run build`
- **Railway** - Supports Next.js out of the box
- **DigitalOcean App Platform** - Use the Next.js template

Make sure to set the `NEXT_PUBLIC_API_URL` environment variable on your deployment platform.

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn React
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TanStack Query](https://tanstack.com/query/latest) - Powerful data synchronization
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js and TypeScript

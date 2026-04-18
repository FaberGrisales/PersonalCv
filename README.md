# Personal Portfolio - Jhon Faber Grisales Rodriguez

A clean, responsive, and highly customizable personal portfolio/CV built with React and TypeScript, powered by Vite.

## Features

- **Modern Tech Stack**: React 19, TypeScript, and Vite for blazing fast performance and development.
- **Responsive Design**: Designed to look great on desktop, tablet, and mobile devices.
- **Section Navigation**: Clean UI for navigating through sections such as Experience, Areas of Expertise, Skills, and Education.
- **Custom Styling**: Built with CSS Modules to keep styles scoped and maintainable.
- **Interactive UI**: Smooth scrolling, reveal animations on scroll, and expandable experience cards.

## Prerequisites

- Node.js (version 18+ recommended)
- npm or yarn

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd PersonalCv
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Type-checks and builds the app for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Lints the codebase using ESLint.

## Project Structure

- `src/components/`: Contains reusable UI components (Hero, Experience, Skills, Contact, etc.).
- `src/data/`: Contains data structures used to populate the site content (e.g., experience and skills data).
- `src/hooks/`: Custom React hooks (e.g., `useReveal` for scroll animations).
- `src/index.css`: Global styles and CSS variables.

## License

This project is licensed under the MIT License.
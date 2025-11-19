# Project Instructions – Resume + Portfolio Site

## Tech & Stack

- This project is built with **Vite + Vue** using **vanilla JavaScript** (no TypeScript).
- Styling MUST be done primarily using **Tailwind CSS**.
- Only use custom CSS when Tailwind cannot express something cleanly.
- Use **Vue Router** for route-based navigation.
- Prefer Vue SFCs using `<script setup>` and `<style scoped>` (when needed).

## Purpose

- This site is my **resume + professional portfolio**.
- It will be deployed on **GitHub Pages** using the custom domain: `samuelstidham.me`.
- The architecture must allow easy updates to:
  - Resume content  
  - Projects  
  - Styling (via Tailwind utility classes)

## Tailwind CSS Requirements

All styling in this project must follow Tailwind’s official installation and usage pattern:

### 1. Tailwind Installation (required)

Install Tailwind and the Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

### 2. Configure Vite Plugin

Add the Tailwind Vite plugin to `vite.config.js`:

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
```

### 3. Import Tailwind in Global CSS

Your main stylesheet (e.g., `src/style.css` or `src/index.css`) MUST include:

```css
@import "tailwindcss";
```

### 4. Use Tailwind Utility Classes

All component styling should use Tailwind utility classes unless absolutely impossible.

Examples:

```html
<h1 class="text-4xl font-bold text-center mt-4">
  Hello World
</h1>
```

### 5. Apply Tailwind Classes for Dark Mode

Theme toggling MUST be compatible with Tailwind’s built-in `dark:` class variants.

Example:

```html
<div class="bg-white text-black dark:bg-gray-900 dark:text-gray-100">
  ...
</div>
```

## Light Mode / Dark Mode Toggle

- A global light/dark theme toggle MUST exist.
- Use a root-level class (`dark`) for theme switching.
- Component styles must rely on Tailwind’s `dark:` variants.

### Icons to Use

**Note:** Font Awesome will be installed manually. Use the exact classes below.

#### **Dark Mode Icon (right side)**  
```html
<i class="fa-sharp-duotone fa-regular fa-moon-star"></i>
```

#### **Light Mode Icon (left side)**  
```html
<i class="fa-sharp-duotone fa-regular fa-sun-bright"></i>
```

### Theme Requirements

- Theme state must persist optionally via `localStorage`.
- The toggle must work across all views and routes.
- Avoid complex state systems; keep implementation lightweight.

## Structure

- Must include the following routes:
  - `/resume`
  - `/projects`
  - `/about`
- Do not mix resume and project logic in the same file.
- Keep the code modular and readable.

## About Page

- Implement an **About** page routed at `/about` (e.g., `AboutView.vue`).
- The main body content of the About page should be based on the same **intro blurb** used in `README.md` (the “Introducing Myself” section).
- When the introduction text in `README.md` is updated, the About page content should be kept logically in sync (they don’t have to be word-for-word identical, but they should convey the same core message).
- Style the About page using Tailwind utility classes, consistent with the rest of the site, and ensure it respects light/dark mode.

## Projects Data Model

- Store project data in `src/data/projects.js` (or similar).
- Each project object must include:
  - `title`
  - `description`
  - `techStack`
  - `links`
  - `tags` (optional)
- The Projects page must render the list entirely from data.

## Styling Guidelines

- Use Tailwind FIRST.
- Use custom CSS only when Tailwind is insufficient.
- Do NOT use component libraries unless explicitly instructed.
- Maintain consistent spacing, typography, and responsive behavior.
- Leverage Tailwind’s responsive classes (`md:`, `lg:`, etc.).

## GitHub Pages Deployment

- Ensure the Vite config supports GitHub Pages.
- Output must include a `CNAME` file containing:
  ```
  samuelstidham.me
  ```
- Provide or maintain a simple NPM deploy script or GitHub Action.

## Agent Behavior

- When modifying files, provide **full file replacements** unless otherwise requested.
- Follow the Tailwind + Vue + JS architecture.
- Do NOT introduce TypeScript.
- Keep the code simple, maintainable, and consistent with the above rules.

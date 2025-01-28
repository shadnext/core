# @shadnext/core

A fully unstyled, lightweight, and accessible UI component library inspired by shadcn/ui. It provides pure web components with Shadow DOM support, making it framework-agnostic and easy to integrate across different package managers and CDNs.

## ✨ Features
- 🚀 **Pure Web Components** – No dependencies, works anywhere.
- 🎨 **Fully Unstyled & Customizable** – Built with TailwindCSS, easily themeable.
- ⚡ **Shadow DOM Support** – Encapsulation without style conflicts.
- 📦 **Multiple Installation Methods** – Supports CDN and package managers.
- 🛠 **Lightweight & Fast** – Optimized for performance.

---

## 📦 Installation

### 1️⃣ Using a CDN (Easiest)
```html
<head>
  <script type="module" src="https://unpkg.com/@shadnext/core/dist/shadnext/shadnext.esm.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/@shadnext/core/dist/shadnext/shadnext.css">
</head>
```

### 2️⃣ Using Package Managers
#### npm
```bash
npm install @shadnext/core
```
#### yarn
```bash
yarn add @shadnext/core
```
#### pnpm
```bash
pnpm add @shadnext/core
```
#### bun
```bash
bun add @shadnext/core
```

---

## 🚀 Quick Start

### Basic Usage
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ShadNext Components</title>

  <!-- Choose ONE installation method: -->

  <!-- 1️⃣ Using CDN -->
  <script type="module" src="https://unpkg.com/@shadnext/core/dist/shadnext/shadnext.esm.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/@shadnext/core/dist/shadnext/shadnext.css">

  <!-- 2️⃣ Using npm/yarn/pnpm/bun -->
  <script type="module" src="./node_modules/@shadnext/core/dist/shadnext/shadnext.esm.js"></script>
</head>
<body>
  <n-button>Click me!</n-button>
</body>
</html>
```

---

## 🎨 Theming
ShadNext has no default styles, allowing complete customization. You can style it using CSS variables or integrate it with TailwindCSS.

```css
:root {
    /* Base colors */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  
    /* Button base styles */
    --button-font-weight: 500;
    --button-height: 2.5rem;
    --button-padding-x: 1rem;
    --button-padding-y: 0.5rem;
    --button-text-size: 0.875rem;
    --button-line-height: 1.25rem;
    --button-radius: var(--radius);
    
    /* Button sizes */
    --button-sm-height: 2.25rem;
    --button-sm-padding-x: 0.75rem;
    --button-lg-height: 2.75rem;
    --button-lg-padding-x: 2rem;
    --button-icon-size: 2.5rem;
  
    /* Button variants */
    --button-bg: hsl(var(--primary));
    --button-text: hsl(var(--primary-foreground));
    --button-hover-bg: hsl(var(--primary) / 0.9);
    --button-hover-text: hsl(var(--primary-foreground));
    
    --button-destructive-bg: hsl(var(--destructive));
    --button-destructive-text: hsl(var(--destructive-foreground));
    --button-destructive-hover-bg: hsl(var(--destructive) / 0.9);
    --button-destructive-hover-text: hsl(var(--destructive-foreground));
    
    --button-outline-border: hsl(var(--border));
    --button-outline-bg: transparent;
    --button-outline-text: hsl(var(--foreground));
    --button-outline-hover-bg: hsl(var(--accent));
    --button-outline-hover-text: hsl(var(--accent-foreground));
    
    --button-secondary-bg: hsl(var(--secondary));
    --button-secondary-text: hsl(var(--secondary-foreground));
    --button-secondary-hover-bg: hsl(var(--secondary) / 0.8);
    --button-secondary-hover-text: hsl(var(--secondary-foreground));
    
    --button-ghost-bg: transparent;
    --button-ghost-text: hsl(var(--foreground));
    --button-ghost-hover-bg: hsl(var(--accent));
    --button-ghost-hover-text: hsl(var(--accent-foreground));
    
    --button-link-text: hsl(var(--primary));
    --button-link-hover-text: hsl(var(--primary) / 0.9);
    
    /* Button states */
    --button-disabled-opacity: 0.5;
    --button-disabled-cursor: not-allowed;
    
    /* Button transitions */
    --button-transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  }
  
  .dark {
    /* Base colors */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  
    /* Button variants - dark mode specific */
    --button-bg: hsl(var(--primary));
    --button-text: hsl(var(--primary-foreground));
    --button-hover-bg: hsl(var(--primary) / 0.9);
    --button-hover-text: hsl(var(--primary-foreground));
    
    --button-destructive-bg: hsl(var(--destructive));
    --button-destructive-text: hsl(var(--destructive-foreground));
    --button-destructive-hover-bg: hsl(var(--destructive) / 0.9);
    --button-destructive-hover-text: hsl(var(--destructive-foreground));
    
    --button-outline-border: hsl(var(--border));
    --button-outline-bg: transparent;
    --button-outline-text: hsl(var(--foreground));
    --button-outline-hover-bg: hsl(var(--accent));
    --button-outline-hover-text: hsl(var(--accent-foreground));
    
    --button-secondary-bg: hsl(var(--secondary));
    --button-secondary-text: hsl(var(--secondary-foreground));
    --button-secondary-hover-bg: hsl(var(--secondary) / 0.8);
    --button-secondary-hover-text: hsl(var(--secondary-foreground));
    
    --button-ghost-bg: transparent;
    --button-ghost-text: hsl(var(--foreground));
    --button-ghost-hover-bg: hsl(var(--accent));
    --button-ghost-hover-text: hsl(var(--accent-foreground));
    
    --button-link-text: hsl(var(--primary));
    --button-link-hover-text: hsl(var(--primary) / 0.9);
  }
```
For a complete list of CSS variables, check the [documentation](#).

---

## 📜 License
MIT

---

## 🙏 Acknowledgments
Inspired by **shadcn/ui**

---

For more details, visit our [official documentation](#).


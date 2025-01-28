# @shadnext/core

A lightweight, unstyled, and accessible UI component library. It provides pure web components with Shadow DOM support, making it easy to integrate across different package managers and CDNs.

## ✨ Features
- 🚀 **Pure Web Components** – No dependencies; works anywhere.
- 🎨 **Fully Unstyled & Customizable** – Easily themeable.
- ⚡ **Shadow DOM Support** – Encapsulation without style conflicts.
- 📦 **Multiple Installation Methods** – Supports CDN and various package managers.
- 🛠 **Lightweight & Fast** – Optimized for performance.

---

## 📦 Installation

### 1️⃣ Using a CDN (Easiest)
To include `@shadnext/core` via CDN, add the following lines to the `<head>` of your HTML:
```html
<head>
  <script type="module" src="https://unpkg.com/@shadnext/core/dist/shadnext/shadnext.esm.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/@shadnext/core/dist/shadnext/shadnext.css">
</head>
```

### 2️⃣ Using Package Managers
To install `@shadnext/core` using a package manager, run one of the following commands:

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
Here’s a simple example to get started with `@shadnext/core`:
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

  <!-- 2️⃣ Using npm/yarn/pnpm/bun -->
  <script type="module" src="./node_modules/@shadnext/core/dist/shadnext/shadnext.esm.js"></script>
</head>
<body>
  <n-button>Click me!</n-button>
</body>
</html>
```

---

## Using Styles

### CDN Usage
To include styles via CDN, add the following lines to the `<head>` of your HTML:
```html
<link rel="stylesheet" href="https://unpkg.com/@shadnext/core/presets/shadcn/base.css">
<link rel="stylesheet" href="https://unpkg.com/@shadnext/core/presets/shadcn/button.css">
```

### Package Manager Usage
To use styles with a package manager, run:
```bash
# For npm
yarn add @shadnext/core
```
Then, import the styles in your main CSS or JavaScript file:
```javascript
import '@shadnext/core/presets/shadcn/base.css';
import '@shadnext/core/presets/shadcn/button.css';
```

This will ensure the styles are applied to your project.

---

## Styling Options

`@shadnext/core` does not come with default styles but provides various presets that users can choose to use or customize. Users can find the following presets:

- Base styles: [Base CSS](https://unpkg.com/@shadnext/core/presets/shadcn/base.css)
- Button styles: [Button CSS](https://unpkg.com/@shadnext/core/presets/shadcn/button.css)

Feel free to use these presets or create your own styles as needed.

---

## Customization Variables

Users can customize their styles by setting the following variables:

To set base variables, add the following code to your CSS file:
```css
:root {
    /* Base colors */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* Add other variables as needed */
}
```

To set button variables, add the following code to your CSS file:
```css
:root {
    /* Button base styles */
    --button-font-weight: 500;
    --button-height: 2.5rem;
    --button-bg: hsl(var(--primary));
    --button-text: hsl(var(--primary-foreground));
    /* Add other button variables as needed */
}
```

For a full guide to all style variables, visit the [presets directory on GitHub](https://github.com/shadnext/core/tree/dev/packages/core/presets).

---

## Using `@use` in SCSS and CSS

In SCSS, you can use the `@use` rule to import styles from `@shadnext/core` efficiently:
```scss
@use "@shadnext/core/presets/shadcn/base";
@use "@shadnext/core/presets/shadcn/button";
```

For regular CSS, you can use `@import` (though `@use` is preferred in SCSS for better scoping):
```css
@import "@shadnext/core/presets/shadcn/base.css";
@import "@shadnext/core/presets/shadcn/button.css";
```

---

## 🎨 Theming
`@shadnext/core` has no default styles, allowing complete customization. You can style it using CSS variables or import styles via SCSS or CSS.

For a complete list of CSS variables, check the [documentation](https://github.com/shadnext/core/tree/dev/packages/core/presets).

---

## 📜 License
MIT

---

## 🙌 Acknowledgments  
- [shadcn/ui](https://ui.shadcn.com/) – Original design inspiration.  
- [StencilJS](https://stenciljs.com/) – Web components framework.  
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework.  

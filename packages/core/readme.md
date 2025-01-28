# @shadnext/core

A lightweight, accessible UI component library built with **StencilJS** and **TailwindCSS**, inspired by **shadcn/ui**. It provides **pure web components** with **Shadow DOM** support, making it framework-agnostic and easy to integrate across different package managers and CDNs.

## ✨ Features
- 🚀 **Pure Web Components** – No dependencies, works anywhere.
- 🎨 **Customizable** – Built with TailwindCSS, easily themeable.
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
ShadNext provides a set of default styles based on TailwindCSS. You can override styles using CSS variables.

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --button-bg: hsl(var(--primary));
  --button-text: hsl(var(--primary-foreground));
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

This README includes:
- ✅ **Multiple installation methods** (CDN, npm, yarn, pnpm, bun)
- ✅ **Quick start guide** with HTML examples
- ✅ **Detailed theming options**
- ✅ **Optimized for Shadow DOM & Web Components**
- ✅ **MIT Licensed**

For more details, visit our [official documentation](#).


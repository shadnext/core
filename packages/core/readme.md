# @shadnext/core

A lightweight, accessible UI component library built with StencilJS and TailwindCSS, inspired by shadcn/ui. This library is built with **Shadow DOM** support and provides **pure web components**, making it easy to use directly in HTML across different package managers and CDNs.

## 🚀 Installation Options

### 1️⃣ Using a CDN (Easiest)
```html
<head>
  <script type="module" src="https://unpkg.com/@shadnext/core@0.0.7/dist/cn/cn.esm.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/@shadnext/core@0.0.7/dist/cn/cn.css">
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
## ⚡ Quick Start

### Basic HTML Setup
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ShadNext Components</title>

  <!-- Choose ONE of these installation methods: -->

  <!-- 1️⃣ Using CDN -->
  <script type="module" src="https://unpkg.com/@shadnext/core@0.0.7/dist/cn/cn.esm.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/@shadnext/core@0.0.7/dist/cn/cn.css">

  <!-- 2️⃣ Using npm/yarn/pnpm/bun -->
  <script type="module">
    import { defineCustomElements } from '@shadnext/core/loader';
    defineCustomElements();
  </script>

  <style>
    :root {
      --background: 0 0% 100%;
      --foreground: 222.2 84% 4.9%;
      --primary: 222.2 47.4% 11.2%;
      --primary-foreground: 210 40% 98%;
      --radius: 0.5rem;
    }

    .dark {
      --background: 222.2 84% 4.9%;
      --foreground: 210 40% 98%;
    }
  </style>
</head>
<body>
  <n-button>Click me!</n-button>
</body>
</html>
```

---
## 🧩 Components

### Button (`<n-button>`)
#### Basic Usage
```html
<n-button>Click me</n-button>
```

#### Variants
```html
<n-button variant="default">Default</n-button>
<n-button variant="destructive">Destructive</n-button>
<n-button variant="outline">Outline</n-button>
<n-button variant="secondary">Secondary</n-button>
<n-button variant="ghost">Ghost</n-button>
<n-button variant="link">Link</n-button>
```

#### Sizes
```html
<n-button size="sm">Small</n-button>
<n-button size="default">Default</n-button>
<n-button size="lg">Large</n-button>
<n-button size="icon">🔍</n-button>
```

#### States
```html
<n-button disabled>Disabled</n-button>
<n-button loading>Loading</n-button>
```

#### With Icons
```html
<n-button>
  <span slot="start">←</span>
  Previous
</n-button>
```

---
## 🔧 Button Props

| Prop      | Options                                                                 | Default    |
|-----------|------------------------------------------------------------------------|------------|
| `variant` | `'default'`, `'destructive'`, `'outline'`, `'secondary'`, `'ghost'`, `'link'` | `'default'` |
| `size`    | `'default'`, `'sm'`, `'lg'`, `'icon'`                                  | `'default'` |
| `disabled` | `boolean`                                                              | `false`     |
| `loading`  | `boolean`                                                              | `false`     |
| `type`     | `'button'`, `'submit'`, `'reset'`                                     | `'button'`  |

---
## 🎭 Button Slots
| Slot    | Description               |
|---------|---------------------------|
| `default` | Main content inside the button |
| `start`   | Left icon/content         |
| `end`     | Right icon/content        |

---
## 🌍 Browser Support
✅ Chrome/Edge (Chromium) 80+  
✅ Firefox 75+  
✅ Safari 13.1+  

---
## 📜 License
MIT

---
## 🙏 Acknowledgments
Inspired by **shadcn/ui**

---

This README provides:
- ✅ **Comprehensive installation options** (CDN & package managers)
- ✅ **Easy-to-use HTML examples**
- ✅ **Detailed documentation** on **Shadow DOM-supported** web components
- ✅ **Props & Slots** documentation
- ✅ **Browser compatibility details**

Would you like me to refine or add any more details?


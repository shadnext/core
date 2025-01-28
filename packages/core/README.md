# @shadnext/core

A collection of reusable, accessible UI components built with StencilJS and TailwindCSS, inspired by shadcn/ui.

## Installation

```bash
npm install @shadnext/core
# or
yarn add @shadnext/core
# or
pnpm add @shadnext/core
```

## Setup

### 1. Add TailwindCSS Configuration

Make sure you have TailwindCSS installed and configured in your project. Add the following to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ... your other content paths
    "./node_modules/@shadnext/core/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
    },
  },
  plugins: [],
}
```

### 2. Add CSS Variables

Add these CSS variables to your global CSS file:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 212.7 26.8% 83.9%;
}
```

## Components

### Button

A versatile button component with various styles and states.

#### Usage

```tsx
import '@shadnext/core/dist/components/button';

// Basic usage
<n-button>Click me</n-button>

// Variants
<n-button variant="default">Default</n-button>
<n-button variant="destructive">Destructive</n-button>
<n-button variant="outline">Outline</n-button>
<n-button variant="secondary">Secondary</n-button>
<n-button variant="ghost">Ghost</n-button>
<n-button variant="link">Link</n-button>

// Sizes
<n-button size="default">Default</n-button>
<n-button size="sm">Small</n-button>
<n-button size="lg">Large</n-button>
<n-button size="icon">Icon</n-button>

// States
<n-button disabled>Disabled</n-button>
<n-button loading>Loading</n-button>

// With icons
<n-button>
  <svg slot="start">...</svg>
  With Start Icon
</n-button>

<n-button>
  With End Icon
  <svg slot="end">...</svg>
</n-button>
```

#### API Reference

##### Props

| Prop      | Type                                                                    | Default   | Description                                      |
|-----------|-------------------------------------------------------------------------|-----------|--------------------------------------------------|
| variant   | 'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link' | 'default' | The visual style variant of the button           |
| size      | 'default' \| 'sm' \| 'lg' \| 'icon'                                      | 'default' | The size of the button                           |
| disabled  | boolean                                                                   | false     | Whether the button is disabled                   |
| loading   | boolean                                                                   | false     | Whether to show a loading spinner                |
| type      | 'button' \| 'submit' \| 'reset'                                          | 'button'  | The type of button                               |
| asChild   | boolean                                                                   | false     | Whether to render as a slot instead of a button  |

##### Slots

| Name    | Description                                    |
|---------|------------------------------------------------|
| default | The main content of the button                 |
| start   | Content to be placed before the main content   |
| end     | Content to be placed after the main content    |
| loading | Custom loading indicator (replaces default)     |

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run start

# Build for production
npm run build

# Run tests
npm run test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © ShadNext Ui

# ShadNext UI

A collection of beautifully designed components built with StencilJS and TailwindCSS, inspired by shadcn/ui.

## Packages

This monorepo contains the following packages:

| Package | Description | Version |
|---------|-------------|---------|
| [@shadnext/core](./packages/core) | Core UI components built with StencilJS | [![npm](https://img.shields.io/npm/v/@shadnext/core.svg)](https://www.npmjs.com/package/@shadnext/core) |

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher
- pnpm (recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shadnext/core.git
cd core
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm start
```

## Development Workflow

### Available Commands

```bash
# Start development server for core package
pnpm start

# Build core package
pnpm build

# Build all packages
pnpm build:all

# Publish packages
pnpm publish:all
```

### Project Structure

```
shadnext/
├── packages/
│   └── core/              # Core UI components
│       ├── src/
│       │   ├── components/  # UI components
│       │   └── index.html   # Development playground
│       └── package.json
├── package.json           # Root package.json
└── lerna.json            # Lerna configuration
```

## Components

Currently available components:

- [Button](./packages/core/src/components/button) - A versatile button component with various styles and states

## Contributing

We're excited that you're interested in contributing! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Development Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Publishing

This repository uses Lerna to manage package versioning and publishing. To publish new versions:

1. Make sure you're logged in to npm:
```bash
npm login
```

2. Build and publish packages:
```bash
pnpm build:all
pnpm publish:all
```

## License

MIT © ShadNext UI

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - For the original design inspiration
- [StencilJS](https://stenciljs.com/) - For the powerful web components framework
- [TailwindCSS](https://tailwindcss.com/) - For the utility-first CSS framework

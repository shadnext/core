import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('n-button', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<n-button></n-button>`,
    });
    const button = page.root.shadowRoot.querySelector('button');
    
    expect(button).toBeTruthy();
    expect(button.getAttribute('type')).toBe('button');
    expect(button.getAttribute('disabled')).toBe(null);
    expect(button.className).toContain('inline-flex');
  });

  it('renders different variants correctly', async () => {
    const variantClasses = {
      default: 'bg-[var(--button-bg)]',
      destructive: 'bg-[var(--button-destructive-bg)]',
      outline: 'bg-[var(--button-outline-bg)]',
      secondary: 'bg-[var(--button-secondary-bg)]',
      ghost: 'bg-[var(--button-ghost-bg)]',
      link: 'bg-transparent',
    };
    
    for (const [variant, expectedClass] of Object.entries(variantClasses)) {
      const page = await newSpecPage({
        components: [Button],
        html: `<n-button variant="${variant}"></n-button>`,
      });
      const button = page.root.shadowRoot.querySelector('button');
      expect(button.className).toContain(expectedClass);
    }
  });

  it('renders different sizes correctly', async () => {
    const sizes = ['default', 'sm', 'lg', 'icon'];
    
    for (const size of sizes) {
      const page = await newSpecPage({
        components: [Button],
        html: `<n-button size="${size}"></n-button>`,
      });
      const button = page.root.shadowRoot.querySelector('button');
      const expectedHeight = `h-[var(--button-${size === 'default' ? '' : size + '-'}height)]`;
      expect(button.className).toContain(expectedHeight);
    }
  });

  it('handles disabled state', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<n-button disabled></n-button>`,
    });
    const button = page.root.shadowRoot.querySelector('button');
    
    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button.getAttribute('aria-disabled')).toBe('true');
    expect(button.className).toContain('disabled:opacity-50');
  });

  it('handles loading state', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<n-button loading></n-button>`,
    });
    const button = page.root.shadowRoot.querySelector('button');
    
    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button.getAttribute('aria-disabled')).toBe('true');
    expect(button.querySelector('.animate-spin')).toBeTruthy();
  });

  it('renders slots correctly', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
        <n-button>
          <div slot="start">Start</div>
          Main Content
          <div slot="end">End</div>
        </n-button>
      `,
    });
    
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.innerHTML).toContain('<slot name="start">');
    expect(button.innerHTML).toContain('<slot>');
    expect(button.innerHTML).toContain('<slot name="end">');
  });

  it('handles asChild prop correctly', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<n-button as-child></n-button>`,
    });
    
    const slotElement = page.root.shadowRoot.querySelector('slot[name="button"]');
    expect(slotElement).toBeTruthy();
  });

  it('uses correct button type based on type prop', async () => {
    const types = ['button', 'submit', 'reset'];
    
    for (const type of types) {
      const page = await newSpecPage({
        components: [Button],
        html: `<n-button type="${type}"></n-button>`,
      });
      const button = page.root.shadowRoot.querySelector('button');
      expect(button.type).toBe(type);
    }
  });

  it('renders custom loading indicator when provided', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
        <n-button loading>
          <div slot="loading">Custom Loader</div>
        </n-button>
      `,
    });
    
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.innerHTML).toContain('<slot name="loading">');
  });
});
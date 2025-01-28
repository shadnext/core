import { newE2EPage } from '@stencil/core/testing';

describe('n-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<n-button>Click me</n-button>');

    const element = await page.find('n-button');
    expect(element).not.toBeNull();
  });

  it('renders with different variants', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <n-button variant="default">Default</n-button>
      <n-button variant="destructive">Destructive</n-button>
      <n-button variant="outline">Outline</n-button>
    `);

    const buttons = await page.findAll('n-button >>> button');
    expect(buttons).toHaveLength(3);

    const defaultBtn = buttons[0];
    const destructiveBtn = buttons[1];
    const outlineBtn = buttons[2];

    const defaultClass = await defaultBtn.getAttribute('class');
    const destructiveClass = await destructiveBtn.getAttribute('class');
    const outlineClass = await outlineBtn.getAttribute('class');

    expect(defaultClass).toContain('bg-[var(--button-bg)]');
    expect(destructiveClass).toContain('bg-[var(--button-destructive-bg)]');
    expect(outlineClass).toContain('border-[var(--button-outline-border)]');
  });

  it('handles disabled state', async () => {
    const page = await newE2EPage();
    await page.setContent('<n-button disabled>Disabled</n-button>');

    const button = await page.find('n-button >>> button');
    expect(await button.getAttribute('disabled')).not.toBeNull();
    expect(await button.getAttribute('aria-disabled')).toBe('true');
  });

  it('shows loading state', async () => {
    const page = await newE2EPage();
    await page.setContent('<n-button loading>Loading</n-button>');

    const button = await page.find('n-button >>> button');
    const spinner = await button.find('.animate-spin');
    
    expect(await button.getAttribute('disabled')).not.toBeNull();
    expect(await button.getAttribute('aria-disabled')).toBe('true');
    expect(spinner).not.toBeNull();
  });

  it('renders with different sizes', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <n-button size="sm">Small</n-button>
      <n-button size="default">Default</n-button>
      <n-button size="lg">Large</n-button>
      <n-button size="icon">🔍</n-button>
    `);

    const buttons = await page.findAll('n-button >>> button');
    expect(buttons).toHaveLength(4);

    const classes = await Promise.all(
      buttons.map(btn => btn.getAttribute('class'))
    );

    expect(classes[0]).toContain('h-[var(--button-sm-height)]');
    expect(classes[1]).toContain('h-[var(--button-height)]');
    expect(classes[2]).toContain('h-[var(--button-lg-height)]');
    expect(classes[3]).toContain('h-[var(--button-icon-height)]');
  });

  it('renders slots correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <n-button>
        <span slot="start">🔍</span>
        Search
        <span slot="end">→</span>
      </n-button>
    `);

    const startSlot = await page.find('n-button >>> slot[name="start"]');
    const defaultSlot = await page.find('n-button >>> slot:not([name])');
    const endSlot = await page.find('n-button >>> slot[name="end"]');

    expect(startSlot).not.toBeNull();
    expect(defaultSlot).not.toBeNull();
    expect(endSlot).not.toBeNull();
  });

  it('handles click events', async () => {
    const page = await newE2EPage();
    await page.setContent('<n-button>Click me</n-button>');

    const button = await page.find('n-button >>> button');
    const clickSpy = await page.spyOnEvent('click');

    await button.click();
    expect(clickSpy).toHaveReceivedEvent();
  });
}); 
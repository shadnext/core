import { Component, Host, h, Prop, Fragment } from '@stencil/core';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color,var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[var(--button-bg)] text-[var(--button-text)] hover:bg-[var(--button-hover-bg)]",
        destructive: "bg-[var(--button-destructive-bg)] text-[var(--button-destructive-text)] hover:bg-[var(--button-destructive-hover-bg)]",
        outline: "border border-[var(--button-outline-border)] bg-[var(--button-outline-bg)] hover:bg-[var(--button-outline-hover-bg)] hover:text-[var(--button-outline-hover-text)]",
        secondary: "bg-[var(--button-secondary-bg)] text-[var(--button-secondary-text)] hover:bg-[var(--button-secondary-hover-bg)]",
        ghost: "bg-[var(--button-ghost-bg)] text-[var(--button-ghost-text)] hover:bg-[var(--button-ghost-hover-bg)] hover:text-[var(--button-ghost-hover-text)]",
        link: "bg-transparent text-[var(--button-link-text)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[var(--button-height)] px-[var(--button-padding-x)] py-[var(--button-padding-y)]",
        sm: "h-[var(--button-sm-height)] rounded-md px-[var(--button-sm-padding-x)] py-[var(--button-sm-padding-y)]",
        lg: "h-[var(--button-lg-height)] rounded-md px-[var(--button-lg-padding-x)] py-[var(--button-lg-padding-y)]",
        icon: "h-[var(--button-icon-height)] w-[var(--button-icon-height)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

@Component({
  tag: 'n-button',
  shadow: true,
  styleUrl: 'button.css',
})
export class Button implements VariantProps<typeof buttonVariants> {
  @Prop() variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' = 'default';
  @Prop() size?: 'default' | 'sm' | 'lg' | 'icon' = 'default';
  @Prop() disabled?: boolean = false;
  @Prop() type?: 'button' | 'submit' | 'reset' = 'button';
  @Prop() asChild?: boolean = false;
  @Prop() loading?: boolean = false;

  render() {
    const buttonClass = buttonVariants({ variant: this.variant, size: this.size });

    const buttonProps = {
      type: !this.asChild ? this.type : undefined,
      class: buttonClass,
      disabled: !!(this.disabled || this.loading),
      'aria-disabled': (this.disabled || this.loading) ? 'true' : null
    };

    return (
      <Host>
        {this.asChild ? (
          <slot name="button">
            <button {...buttonProps}>
              {this.loading ? (
                <div class="inline-flex items-center gap-x-2">
                  <span class="h-4 w-4 animate-spin">
                    <slot name="loading">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </slot>
                  </span>
                  <slot></slot>
                </div>
              ) : (
                <Fragment>
                  <slot name="start"></slot>
                  <slot></slot>
                  <slot name="end"></slot>
                  <span>Click me</span>
                </Fragment>
              )}
            </button>
          </slot>
        ) : (
          <button {...buttonProps}>
            {this.loading ? (
              <div class="inline-flex items-center gap-x-2">
                <span class="h-4 w-4 animate-spin">
                  <slot name="loading">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </slot>
                </span>
                <slot></slot>
              </div>
            ) : (
              <>
                <slot name="start"></slot>
                <slot></slot>
                <slot name="end"></slot>
                <span>Click me</span>
              </>
            )}
          </button>
        )}
      </Host>
    );
  }
}
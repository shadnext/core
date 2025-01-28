import { Component, Host, h, Prop } from '@stencil/core';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color,var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[var(--button-bg,hsl(var(--primary)))] text-[var(--button-text,hsl(var(--primary-foreground)))] hover:bg-[var(--button-hover-bg,hsl(var(--primary)/0.9))]",
        destructive: "bg-[var(--button-destructive-bg,hsl(var(--destructive)))] text-[var(--button-destructive-text,hsl(var(--destructive-foreground)))] hover:bg-[var(--button-destructive-hover-bg,hsl(var(--destructive)/0.9))]",
        outline: "border border-[var(--button-border,hsl(var(--input)))] bg-[var(--button-outline-bg,hsl(var(--background)))] hover:bg-[var(--button-outline-hover-bg,hsl(var(--accent)))] hover:text-[var(--button-outline-hover-text,hsl(var(--accent-foreground)))]",
        secondary: "bg-[var(--button-secondary-bg,hsl(var(--secondary)))] text-[var(--button-secondary-text,hsl(var(--secondary-foreground)))] hover:bg-[var(--button-secondary-hover-bg,hsl(var(--secondary)/0.8))]",
        ghost: "hover:bg-[var(--button-ghost-hover-bg,hsl(var(--accent)))] hover:text-[var(--button-ghost-hover-text,hsl(var(--accent-foreground)))]",
        link: "text-[var(--button-link-text,hsl(var(--primary)))] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[var(--button-height,2.5rem)] px-[var(--button-padding-x,1rem)] py-[var(--button-padding-y,0.5rem)]",
        sm: "h-[var(--button-sm-height,2.25rem)] rounded-md px-[var(--button-sm-padding-x,0.75rem)]",
        lg: "h-[var(--button-lg-height,2.75rem)] rounded-md px-[var(--button-lg-padding-x,2rem)]",
        icon: "h-[var(--button-icon-size,2.5rem)] w-[var(--button-icon-size,2.5rem)]",
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
    const Comp = this.asChild ? 'slot' : 'button';
    const buttonClass = buttonVariants({ variant: this.variant, size: this.size });

    return (
      <Host>
        <Comp 
          type={!this.asChild ? this.type : undefined}
          disabled={this.disabled || this.loading}
          class={buttonClass}
          {...(!this.asChild && { 'aria-disabled': this.disabled || this.loading })}
        >
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
            </>
          )}
        </Comp>
      </Host>
    );
  }
}
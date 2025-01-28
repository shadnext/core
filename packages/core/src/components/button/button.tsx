import { Component, Host, h, Prop } from '@stencil/core';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
export class MyButton implements VariantProps<typeof buttonVariants> {
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
// my-button.tsx
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class MyButton {
  @Prop() variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' = 'default';
  @Prop() size: 'sm' | 'default' | 'lg' = 'default';
  @Prop() disabled: boolean = false;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  render() {
    return (
      <Host
        class={{
          'btn': true,
          [`variant-${this.variant}`]: true,
          [`size-${this.size}`]: true,
          'disabled': this.disabled
        }}
      >
        <button 
          type={this.type}
          disabled={this.disabled}
        >
          <span class="btn-content">
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
          </span>
        </button>
      </Host>
    );
  }
}
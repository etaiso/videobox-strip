import { Component, Host, h, EventEmitter, Event, Prop, getAssetPath } from '@stencil/core';

export type ButtonType = 'info' | 'cart';

@Component({
  tag: 'videobox-button',
  styleUrl: 'videobox-button.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class VideoboxButton {
  @Prop() type: ButtonType;
  @Prop() id: string;

  @Event() buttonClicked: EventEmitter<{ type: ButtonType, id: string }>;

  render() {
    return (
      <Host>
        <button onClick={() => this.buttonClicked.emit({ type: this.type, id: this.id})}>
          <img src={getAssetPath(`./assets/${this.type}.svg`)} class='icon' />
        </button>
      </Host>
    );
  }

}

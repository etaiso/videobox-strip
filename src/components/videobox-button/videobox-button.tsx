import { Component, Host, h, EventEmitter, Event, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'videobox-button',
  styleUrl: 'videobox-button.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class VideoboxButton {
  @Prop() name: string;

  @Event() buttonClicked: EventEmitter<string>;

  onButtonClick(name: string) {
    this.buttonClicked.emit(name);
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.onButtonClick(this.name)}>
          <img src={getAssetPath(`./assets/${this.name}.svg`)} class='icon' />
        </button>
      </Host>
    );
  }

}

import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'videobox-strip-item',
  styleUrl: 'videobox-strip-item.css',
  shadow: true,
})
export class VideoboxStripItem {

  @Prop() title: string;

  @Prop() desc: string;

  @Prop() src: string;

  render() {
    return (
      <Host>
          <div class="text">
            {this.title}
          </div>
          <div class="text">
            {this.desc}
          </div>
      </Host>
    );
  }

}

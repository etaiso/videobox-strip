import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'videobox-strip-container',
  styleUrl: 'videobox-strip-container.css',
  shadow: true,
})
export class VideoboxStripContainer {

  @Prop() data: { title: string, desc: string}[] = [
    { title: 'Dummy title #1', desc: 'desc' },
    { title: 'Dummy title #2', desc: 'desc' },
    { title: 'Dummy title #3', desc: 'desc' },
    { title: 'Dummy title #4', desc: 'desc' },
    { title: 'Dummy title #5', desc: 'desc' },
  ];

  render() {
    return (
      <Host>
          {this.data.map(i => <videobox-strip-item title={i.title} desc={i.desc}></videobox-strip-item>)}
      </Host>
    );
  }

}

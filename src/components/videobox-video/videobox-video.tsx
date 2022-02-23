import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'videobox-video',
  styleUrl: 'videobox-video.css',
  shadow: true,
})
export class VideoboxVideo {
  private videoRef: HTMLVideoElement;
  @Prop() active: boolean;
  @Prop() src: string;

  @Watch('active')
  watchActiveHandler() {
    if (this.active) {
      this.videoRef.play();
    } else {
      this.videoRef.pause();
    }
  }

  render() {
    return (
      <Host>
        <video src={this.src} muted loop ref={el => this.videoRef = el}></video>
      </Host>
    );
  }

}

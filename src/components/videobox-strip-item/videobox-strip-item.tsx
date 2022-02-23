import { Component, Host, h, Prop, State, Listen } from '@stencil/core';
import { VideoboxItem } from '../../types';

@Component({
  tag: 'videobox-strip-item',
  styleUrl: 'videobox-strip-item.css',
  shadow: true,
})
export class VideoboxStripItem {
  private ref: HTMLElement;
  private imgRef: HTMLElement;
  private videoRef: HTMLElement;

  @State() active: boolean = false;
  @Prop() item: VideoboxItem;
  @Prop() index: number;

  @Listen('mouseenter')
  mouseEnterHandler() {
    this.active = true;
    this.ref.style.zIndex = '99';
    this.imgRef.style.display = 'none';
    this.videoRef.style.display = 'initial';
  }

  @Listen('mouseleave')
  mouseLeaveHandler() {
    this.active = false;
    this.ref.style.zIndex = '1';
    this.imgRef.style.display = 'initial';
    this.videoRef.style.display = 'none';
  }

  render() {
    return (
      <Host ref={el => this.ref = el}>
        <div class="wrapper">
          <img src={this.item.imageSrc} ref={el => this.imgRef = el} />
          <videobox-video src={this.item.videoSrc} active={this.active} ref={el => this.videoRef = el}></videobox-video>
          <div class="overlay">
            <div class="text">
              {this.item.title}
            </div>
            <div class="text">
              {this.item.description}
            </div>
          </div>
        </div>
      </Host>
    );
  }

}

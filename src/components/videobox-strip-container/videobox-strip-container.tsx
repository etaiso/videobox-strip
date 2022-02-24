import { Component, Host, h, Prop } from '@stencil/core';

const defaultData = [
  {
  title: 'Dummy title #1',
  description: 'Description',
  videoSrc: 'https://video.wixstatic.com/video/11062b_c5dfb9a4acf74b67806ea4cb604b9c7f/1080p/mp4/file.mp4',
  imageSrc: 'https://static.wixstatic.com/media/827c6d_f28efa6109c442bb9f0d9d64f6b3178c~mv2.jpeg/v1/fill/w_250,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/10.jpeg'
},
{
  title: 'Dummy title #2',
  description: 'Description',
  videoSrc: 'https://video.wixstatic.com/video/11062b_3da4a26484194105bde5b3935f5afb7b/480p/mp4/file.mp4',
  imageSrc: 'https://static.wixstatic.com/media/11062b_3da4a26484194105bde5b3935f5afb7bf000.jpg/v1/fill/w_250,h_160,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_3da4a26484194105bde5b3935f5afb7bf000.jpg'
},
{
  title: 'Dummy title #3',
  description: 'Description',
  videoSrc: 'https://video.wixstatic.com/video/11062b_2e82a4146c344371990b5839819e8806/480p/mp4/file.mp4',
  imageSrc: 'https://static.wixstatic.com/media/11062b_2e82a4146c344371990b5839819e8806f000.jpg/v1/fill/w_250,h_160,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_2e82a4146c344371990b5839819e8806f000.jpg'
},
{
  title: 'Dummy title #4',
  description: 'Description',
  videoSrc: 'https://video.wixstatic.com/video/11062b_b9abbd9e13a9459db58a6baa340377e7/480p/mp4/file.mp4',
  imageSrc: 'https://static.wixstatic.com/media/11062b_b9abbd9e13a9459db58a6baa340377e7f000.jpg/v1/fill/w_250,h_160,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_b9abbd9e13a9459db58a6baa340377e7f000.jpg'
},
];

@Component({
  tag: 'videobox-strip-container',
  styleUrl: 'videobox-strip-container.css',
  shadow: true,
})
export class VideoboxStripContainer {
  @Prop() data: any;

  render() {
    // @ts-ignore
    const parsed = this.data ? JSON.parse(this.data) : this.getAttribute && JSON.parse(this.getAttribute('data'));
    const data = parsed ?? defaultData;
    
    return (
      <Host>
        {data.map((item, index) => <videobox-strip-item item={item} index={index}></videobox-strip-item>)}
      </Host>
    );
  }
}

import { Component, Host, h, Prop } from '@stencil/core';
import { VideoboxItem } from '../../types';

@Component({
  tag: 'videobox-strip-container',
  styleUrl: 'videobox-strip-container.css',
  shadow: true,
})
export class VideoboxStripContainer {

  @Prop() data: VideoboxItem[] = [
    { title: 'Dummy title #1', description: 'Description', videoSrc: 'https://video.wixstatic.com/video/11062b_2e82a4146c344371990b5839819e8806/480p/mp4/file.mp4', imageSrc: 'https://static.wixstatic.com/media/11062b_8cdd36bb40d443309c23a118d0b9ef26f000.jpg/v1/fill/w_240,h_160,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_8cdd36bb40d443309c23a118d0b9ef26f000.jpg' },
    { title: 'Dummy title #2', description: 'Description', videoSrc: 'https://video.wixstatic.com/video/11062b_3da4a26484194105bde5b3935f5afb7b/480p/mp4/file.mp4', imageSrc: 'https://static.wixstatic.com/media/11062b_2bd2aa6ddc2d47b182a186e7de7e60acf000.jpg/v1/fill/w_250,h_160,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_2bd2aa6ddc2d47b182a186e7de7e60acf000.jpg'  },
    { title: 'Dummy title #3', description: 'Description', videoSrc: 'https://video.wixstatic.com/video/11062b_c5dfb9a4acf74b67806ea4cb604b9c7f/480p/mp4/file.mp4', imageSrc: 'https://static.wixstatic.com/media/11062b_b9abbd9e13a9459db58a6baa340377e7f000.jpg/v1/fill/w_250,h_160,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_b9abbd9e13a9459db58a6baa340377e7f000.jpg'  },
    { title: 'Dummy title #4', description: 'Description', videoSrc: 'https://video.wixstatic.com/video/11062b_2bd2aa6ddc2d47b182a186e7de7e60ac/480p/mp4/file.mp4', imageSrc: 'https://static.wixstatic.com/media/11062b_1c7f9e02626245468bae759dc5530425f000.jpg/v1/fill/w_250,h_160,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_1c7f9e02626245468bae759dc5530425f000.jpg'  },
  ];

  render() {
    return (
      <Host>
        {this.data.map((item, index) => <videobox-strip-item item={item} index={index}></videobox-strip-item>)}
      </Host>
    );
  }

}

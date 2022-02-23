import { newSpecPage } from '@stencil/core/testing';
import { VideoboxVideo } from '../videobox-video';

describe('videobox-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VideoboxVideo],
      html: `<videobox-video></videobox-video>`,
    });
    expect(page.root).toEqualHtml(`
      <videobox-video>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </videobox-video>
    `);
  });
});

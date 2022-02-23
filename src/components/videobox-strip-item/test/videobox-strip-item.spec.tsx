import { newSpecPage } from '@stencil/core/testing';
import { VideoboxStripItem } from '../videobox-strip-item';

describe('videobox-strip-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VideoboxStripItem],
      html: `<videobox-strip-item></videobox-strip-item>`,
    });
    expect(page.root).toEqualHtml(`
      <videobox-strip-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </videobox-strip-item>
    `);
  });
});

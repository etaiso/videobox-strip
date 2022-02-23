import { newSpecPage } from '@stencil/core/testing';
import { VideoboxStripContainer } from '../videobox-strip-container';

describe('videobox-strip-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VideoboxStripContainer],
      html: `<videobox-strip-container></videobox-strip-container>`,
    });
    expect(page.root).toEqualHtml(`
      <videobox-strip-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </videobox-strip-container>
    `);
  });
});

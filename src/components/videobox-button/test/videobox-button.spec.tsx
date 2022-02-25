import { newSpecPage } from '@stencil/core/testing';
import { VideoboxButton } from '../videobox-button';

describe('videobox-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VideoboxButton],
      html: `<videobox-button></videobox-button>`,
    });
    expect(page.root).toEqualHtml(`
      <videobox-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </videobox-button>
    `);
  });
});

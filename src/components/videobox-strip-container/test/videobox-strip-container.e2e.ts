import { newE2EPage } from '@stencil/core/testing';

describe('videobox-strip-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<videobox-strip-container></videobox-strip-container>');

    const element = await page.find('videobox-strip-container');
    expect(element).toHaveClass('hydrated');
  });
});

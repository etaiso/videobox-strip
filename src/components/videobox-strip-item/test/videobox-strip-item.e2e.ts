import { newE2EPage } from '@stencil/core/testing';

describe('videobox-strip-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<videobox-strip-item></videobox-strip-item>');

    const element = await page.find('videobox-strip-item');
    expect(element).toHaveClass('hydrated');
  });
});

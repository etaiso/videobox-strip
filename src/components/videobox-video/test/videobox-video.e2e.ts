import { newE2EPage } from '@stencil/core/testing';

describe('videobox-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<videobox-video></videobox-video>');

    const element = await page.find('videobox-video');
    expect(element).toHaveClass('hydrated');
  });
});

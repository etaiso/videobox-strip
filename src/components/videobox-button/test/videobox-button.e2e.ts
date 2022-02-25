import { newE2EPage } from '@stencil/core/testing';

describe('videobox-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<videobox-button></videobox-button>');

    const element = await page.find('videobox-button');
    expect(element).toHaveClass('hydrated');
  });
});

// Practice E-Commerce Site – SDET Unicorns
// https://practice.sdetunicorns.com/

describe('Home', () => {
    it('Open Url and Assert The Title', () => {
        // Open URL
        browser.url('https://practice.sdetunicorns.com/');

        // Assert the title
        expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });
});
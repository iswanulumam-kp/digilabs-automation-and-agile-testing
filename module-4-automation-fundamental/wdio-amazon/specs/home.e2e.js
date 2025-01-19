import { browser, expect, $ } from '@wdio/globals';

describe('Amazon Home Page', () => {
    it('should verify the homepage URL and title', async () => {
        await browser.url('/');
        
        // Verify URL contains 'amazon'
        await expect(browser).toHaveUrl(expect.stringContaining('amazon'));
        
        // Verify the title matches
        await expect(browser).toHaveTitle('Amazon.com. Spend less. Smile more.');
    });

    it('should search for MacBook and verify search result text', async () => {
        const searchInput = await $('#twotabsearchtextbox');
        const searchButton = await $('input[type="submit"]');
        const expectedSearchText = await $('.a-color-state.a-text-bold');
    
        await searchInput.addValue('macbook');
        await searchButton.click();
    
        // Verify that the search result contains the search term 'macbook'
        await expect(expectedSearchText).toHaveText(expect.stringContaining('macbook'));
    });

    it('should verify auto-suggestion for search', async () => {
        const searchInput = await $('#twotabsearchtextbox');
        const suggestionPane = await $('.left-pane-results-container');
        const firstSuggestion = await suggestionPane.$('div');
        const expectedSearchText = await $('.a-color-state.a-text-bold');
    
        // Trigger search and display suggestions
        await searchInput.addValue('book');
        await expect(suggestionPane).toBeDisplayed();
    
        // Select the first suggestion
        await browser.keys('ArrowDown');
        const suggestionText = await firstSuggestion.getText();
        await browser.keys('Enter');
    
        // Verify the search result contains the selected suggestion
        await expect(expectedSearchText).toHaveText(expect.stringContaining(suggestionText));
    });
});
import { browser, expect, $ } from '@wdio/globals';
import { waitForPriceUpdate } from './../utils/waitForPriceUpdate';

describe('Cart Flow', () => {

    it.only('Add to Cart', async () => {
        // Open the homepage
        await browser.url('/');

        // Search for "automation testing"
        const searchInput = $('#twotabsearchtextbox');
        await searchInput.addValue('automation testing');
        await $('input[type="submit"]').click();

        // Click on the product from search results
        const productTitle = $('h2[aria-label="Web Automation Testing Using Playwright: End-to-end, API, accessibility, and visual testing using Playwright (English Edition)"]');
        await productTitle.click();
        
        // Add product to the cart
        await $('#add-to-cart-button').click();

        // Verify the product was added to the cart
        await expect($('h1[tabindex="-1"]')).toHaveText('Added to cart');
        
         // Get the subtotal from the cart
        const subtotal = await browser.execute(() => {
          return document.querySelector('#sw-subtotal span[class="a-offscreen"]').textContent
        })
        await expect(subtotal).toEqual('$36.05');

    });

    it('Update Cart Quantity', async () => {
        // Define selectors for elements
        const cartButton = $('#nav-cart');
        const incrementButton = $('[data-a-selector="increment-icon"]');
        const priceElement = $('.a-size-medium.a-color-base.sc-price.sc-white-space-nowrap');

        // Navigate to the cart
        await cartButton.click();

        // Increment the item quantity
        await incrementButton.click();

        // Wait for the price to update using the helper
        await waitForPriceUpdate(priceElement, '$36.05', '$72.10');

        // Verify the updated price
        const updatedPrice = await priceElement.getText();
        await expect(updatedPrice).toEqual('$72.10');
    });
});
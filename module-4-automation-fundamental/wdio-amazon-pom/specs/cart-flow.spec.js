// tests/cartFlow.spec.js
import { expect } from '@wdio/globals';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import { waitForPriceUpdate } from '../utils/waitForPriceUpdate';

describe('Cart Flow', () => {

    it('Add to Cart', async () => {
        // Open the homepage and search for a product
        await HomePage.open();
        await HomePage.searchForProduct('automation testing');
        
        // Click on the product from search results
        await ProductPage.clickProduct();
        
        // Add product to the cart
        await ProductPage.addToCart();

        // Verify the product was added to the cart
        await expect(ProductPage.addedToCartMessage).toHaveText('Added to cart');

        // Verify the subtotal from the cart
        const subtotal = await CartPage.getSubtotal();
        await expect(subtotal).toEqual('$36.05');
    });

    it('Update Cart Quantity', async () => {
        // Open the cart and increment the item quantity
        await CartPage.openCart();
        await CartPage.incrementQuantity();

        // Wait for the price to update using the helper function
        await waitForPriceUpdate(CartPage.priceElement, '$36.05', '$72.10');

        // Verify the updated price
        const updatedPrice = await CartPage.getPrice();
        await expect(updatedPrice).toEqual('$72.10');
    });
});
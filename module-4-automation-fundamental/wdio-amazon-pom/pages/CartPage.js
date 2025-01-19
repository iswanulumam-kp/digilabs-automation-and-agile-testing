import BasePage from './BasePage';
import { $ } from '@wdio/globals';

class CartPage extends BasePage {
    get cartButton() {
        return $('#nav-cart');
    }

    get incrementButton() {
        return $('[data-a-selector="increment-icon"]');
    }

    get priceElement() {
        return $('.a-size-medium.a-color-base.sc-price.sc-white-space-nowrap');
    }

    async getSubtotalText() {
        const subtotal = await browser.execute(() => {
            return document.querySelector('#sw-subtotal span[class="a-offscreen"]').textContent;
        });
        return subtotal;
    }

    async openCart() {
        await this.click(this.cartButton);
    }

    async incrementQuantity() {
        await this.click(this.incrementButton);
    }

    async getSubtotal() {
        return await this.getSubtotalText();
    }

    async getPrice() {
        return await this.getText(this.priceElement);
    }
}

export default new CartPage();

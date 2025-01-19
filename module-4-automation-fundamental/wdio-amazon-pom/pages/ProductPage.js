import BasePage from './BasePage';
import { $ } from '@wdio/globals';

class ProductPage extends BasePage {
    get productTitle() {
        return $('h2[aria-label="Web Automation Testing Using Playwright: End-to-end, API, accessibility, and visual testing using Playwright (English Edition)"]');
    }

    get addToCartButton() {
        return $('#add-to-cart-button');
    }

    get addedToCartMessage() {
        return $('h1[tabindex="-1"]');
    }

    async clickProduct() {
        await this.click(this.productTitle);
    }

    async addToCart() {
        await this.click(this.addToCartButton);
    }
}

export default new ProductPage();
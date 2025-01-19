import BasePage from './BasePage';
import { $ } from '@wdio/globals';

class HomePage extends BasePage {
    get searchInput() {
        return $('#twotabsearchtextbox');
    }

    get searchButton() {
        return $('input[type="submit"]');
    }

    async searchForProduct(productName) {
        await this.addText(this.searchInput, productName);
        await this.click(this.searchButton);
    }
}

export default new HomePage();
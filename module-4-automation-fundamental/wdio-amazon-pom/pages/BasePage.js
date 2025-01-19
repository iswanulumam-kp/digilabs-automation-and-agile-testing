// pages/BasePage.js
import { $, browser } from '@wdio/globals';

class BasePage {
    /**
     * Open a given URL path
     * @param {string} path - The path to navigate to
     */
    async open(path = '/') {
        await browser.url(path);
    }

    /**
     * Wait for an element to be visible, then click on it
     * @param {WebdriverIO.Element} element - The element to click on
     */
    async click(element) {
        try {
            await element.waitForDisplayed({ timeout: 5000 });
            await element.waitForClickable({ timeout: 5000 });
            await element.click();
        } catch (error) {
            throw new Error(`Failed to click on element: ${error.message}`);
        }
    }

    /**
     * Add text to an input field
     * @param {WebdriverIO.Element} element - The input element
     * @param {string} text - The text to input
     */
    async addText(element, text) {
        await element.waitForDisplayed();
        await element.setValue(text);
    }

    /**
     * Get text from an element
     * @param {WebdriverIO.Element} element - The element to extract text from
     * @returns {string} - The text content of the element
     */
    async getText(element) {
        await element.waitForDisplayed();
        return await element.getText();
    }

    /**
     * Wait until an element contains specific text
     * @param {WebdriverIO.Element} element - The element to check
     * @param {string} text - The expected text content
     */
    async waitForText(element, text, timeout = 5000) {
        await element.waitForDisplayed({ timeout });
        await element.waitUntil(async () => {
            const currentText = await element.getText();
            return currentText.includes(text);
        }, { timeout, timeoutMsg: `Text "${text}" not found in element.` });
    }
}

export default BasePage;
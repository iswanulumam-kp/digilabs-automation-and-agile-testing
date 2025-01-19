// utils/waitForPriceUpdate.js

/**
 * Helper function to wait for the price to change within a given timeout.
 *
 * @param {WebdriverIO.Element} element - The element containing the price.
 * @param {string} oldPrice - The price before the update.
 * @param {string} newPrice - The expected updated price.
 * @param {number} [timeout=5000] - The time to wait for the price to change in milliseconds (default is 5000ms).
 * @returns {Promise<void>}
 */
export async function waitForPriceUpdate(element, oldPrice, newPrice, timeout = 5000) {
    await element.waitUntil(async () => {
        const currentPrice = await element.getText();
        return currentPrice !== oldPrice; // Ensure price has changed
    }, {
        timeout,
        timeoutMsg: `Price did not update within ${timeout / 1000} seconds`
    });

    // Verify that the new price matches the expected price
    const updatedPrice = await element.getText();
    await expect(updatedPrice).toEqual(newPrice);
}

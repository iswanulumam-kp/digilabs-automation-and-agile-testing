const { subtract } = require('../../lib/math');

describe('subspract()', () => {

    it('should return the sum of two positive numbers', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    it('should return zero when both numbers are zero', () => {
        expect(subtract(0, 0)).toBe(0);
    });

    it('should throw an error if the first argument is not a number', () => {
        expect(() => subtract('a', 2)).toThrow('Both arguments must be numbers.');
    });

    it('should throw an error if the second argument is not a number', () => {
        expect(() => subtract(3, 'b')).toThrow('Both arguments must be numbers.');
    });

});
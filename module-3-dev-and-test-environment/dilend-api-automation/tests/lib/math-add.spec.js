const { add, subtract } = require('../../lib/math');

describe('add()', () => {
    
    it('should return the sum of two positive numbers', () => {
        expect(add(5, 200)).toBe(205);
    });

    it('should return zero when both numbers are zero', () => {
        expect(add(0, 0)).toBe(0);
    });

    it('should throw an error if the first argument is not a number', () => {
        expect(() => add('a', 2)).toThrow('Both arguments must be numbers.');
    });

    it('should throw an error if the second argument is not a number', () => {
        expect(() => subtract(5, 'b')).toThrow('Both arguments must be numbers.');
    });

});
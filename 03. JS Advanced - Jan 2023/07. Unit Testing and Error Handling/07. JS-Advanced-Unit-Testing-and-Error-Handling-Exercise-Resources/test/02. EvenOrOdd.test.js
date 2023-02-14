const { expect } = require('chai');
const { isOddOrEven } = require('../02. Even Or Odd');

describe('Test string length of array', () => {

    it('should return undefined if not string', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });

    it('should return undefined if not string', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });

    it('should return undefined if not string', () => {
        expect(isOddOrEven(NaN)).to.be.undefined;
    });

    it('should return undefined if not string', () => {
        expect(isOddOrEven(null)).to.be.undefined;
    });
    it('should return undefined if not string', () => {
        expect(isOddOrEven([1])).to.be.undefined;
    });
    it('should return even', () => {

        expect(isOddOrEven('aa')).to.equal('even');
    });
    it('should return odd', () => {

        expect(isOddOrEven('a')).to.equal('odd');
    });
    it('should return even', () => {

        expect(isOddOrEven('')).to.equal('even');
    });
});
const { expect } = require('chai');
const isOddOrEven = require('../Check if it works');

describe('even or not', () => {

    it('isString', () => {

        expect(isOddOrEven(3)).to.undefined;

    });
    it('isString', () => {

        expect(isOddOrEven(true)).to.undefined;
    });

    it('isString', () => {

        expect(isOddOrEven([])).to.undefined;
    });

    it('isEven', () => {

        expect(isOddOrEven('ss')).to.equal('even');
    });

    it('isOdd', () => {

        expect(isOddOrEven('s')).to.equal('odd');
    });
});

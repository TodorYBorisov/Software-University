const { expect } = require('chai');
const { isSymmetric } = require('../05. Check for Symmetry');

describe('Check Array for simetricity', () => {

    it('Take an array as an argument', () => {

        expect(isSymmetric([1, 1, 1])).to.be.true;
    });

    it('Take an array as an argument', () => {

        expect(isSymmetric([])).to.be.true;
    });

    it('Return false for any input that isnt of the correct type', () => {

        expect(isSymmetric('string')).to.be.false;
    });
    it('Return false for any input that isnt of the correct type', () => {

        expect(isSymmetric({ key: 'value' })).to.be.false;
    });

    it('Return true if the input array is symmetric', () => {

        expect(isSymmetric([1, 2, 1])).to.be.true;

    });

    it('Return true if the input array is symmetric', () => {

        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;

    });
    it('Returns false if the input array is not symmetric', () => {

        expect(isSymmetric(['a', 'b', 'c', 'd'])).to.be.false;

    });

    it('Otherwise, return false', () => {

        expect(isSymmetric('3', 1)).to.be.false;
    });
    it('Returns false for a mismatched element', () => {

        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
});
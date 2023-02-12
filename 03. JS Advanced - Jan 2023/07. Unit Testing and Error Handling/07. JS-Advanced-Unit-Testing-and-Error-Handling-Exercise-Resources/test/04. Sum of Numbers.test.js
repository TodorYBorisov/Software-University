const { expect } = require('chai');
const { sum } = require('../04. Sum of Numbers ');

describe('Check Array Sum', () => {

    it('Checked for the correct sum', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });

    it('Check floating numbers', () => {
        expect(sum([0.10, 0.20])).to.equal((0.3));
    });

    it('Check sum to be zero if array empty', () => {
        expect(sum([])).to.be.equal(0);
    });

    it('return NaN if not array', () => {
        expect(sum('string')).to.be.NaN;
    });

});


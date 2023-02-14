const { expect } = require('chai');
const lookupChar = require('../03. Char Lookup');

describe('Test function', () => {

    it('should return undefined if not accepted string and integer', () => {
        expect(lookupChar(1, 'aaa')).to.be.undefined;
    });

    it('should return undefined if not accepted string and integer', () => {
        expect(lookupChar([], {})).to.be.undefined;
    });
    it('should return undefined if not accepted string and integer', () => {
        expect(lookupChar(1, [])).to.be.undefined;
    });
    it('should return undefined if not accepted string and integer', () => {
        expect(lookupChar([], [])).to.be.undefined;
    });
    it('should return undefined if not accepted string and integer', () => {
        expect(lookupChar({}, {})).to.be.undefined;
    });

    it('should return undefined if not accepted string and integer', () => {
        expect(lookupChar(0, {})).to.be.undefined;
    });

    it('should return Incorrect index if index is negative number', () => {
        expect(lookupChar('aaaaa', -2)).to.equal('Incorrect index');
    });
    it('should return Incorrect index if index is negative number', () => {
        expect(lookupChar('aaaaa', -1)).to.equal('Incorrect index');
    });
    it('should return Incorrect index if index is negative number', () => {
        expect(lookupChar('aaaaa', -3)).to.equal('Incorrect index');
    });
    
  
    it('should return Incorrect index if index is bigger than the string length', () => {
        expect(lookupChar('aaa', 5)).to.equal('Incorrect index');
    });

    it('should return the character at the specified index', () => {
        expect(lookupChar('Todor', 2)).to.equal('d');
    });
    it('should return the character at the specified index', () => {
        expect(lookupChar('To', 0)).to.equal('T');
    });
    it('should return the character at the specified index', () => {
        expect(lookupChar('Todor', 4)).to.equal('r');
    });

    it('should return undefined, when index param is floating-point number', () => {
        expect(lookupChar('love', 2.2)).to.be.undefined;
    });

});

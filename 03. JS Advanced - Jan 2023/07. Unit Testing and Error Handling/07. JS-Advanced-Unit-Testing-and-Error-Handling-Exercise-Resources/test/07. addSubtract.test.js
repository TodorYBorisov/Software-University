const { expect } = require('chai');
const { createCalculator } = require('../07. addSubtract');

describe('Chek function create calulator', () => {

    it('Test 1: return type of function to be object', () => {
        expect(typeof createCalculator()).to.equal('object');
    });

    it('Test 2: return object, that has property add', () => {
        expect(typeof createCalculator().add).to.equal('function');
    });
    it('Test 3: return object, that has property subtract', () => {
        expect(typeof createCalculator().subtract).to.equal('function');
    });

    it('Test 4: return object, that has property get', () => {
        expect(typeof createCalculator().get).to.equal('function');
    });
    it('Test 5: should keep an internal sum that cant be modified from the outside', () => {
        expect(createCalculator().value).to.equal(undefined);
    });
    it('Test 6: add method adds parsable input', () => {
        const calc = createCalculator();
        calc.add('1');
        expect(calc.get()).to.equal(1);
    });
    it('Test 7: add method subtract parsable input', () => {
        const calc = createCalculator();
        calc.add('2');
        calc.subtract('1');
        expect(calc.get()).to.equal(1);
    });
});

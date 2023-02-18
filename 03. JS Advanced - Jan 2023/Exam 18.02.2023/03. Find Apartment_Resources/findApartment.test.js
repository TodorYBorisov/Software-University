const { expect } = require('chai');
const { findNewApartment } = require('./findApartment');

describe('Find Aprtment Tests', () => {

    describe('Test for is location is good', () => {

        it('should return Invalid input!', () => {
            expect(() => findNewApartment.isGoodLocation(5, 5)).to.throw('Invalid input!');
        });

        it('should return Invalid input!', () => {
            expect(() => findNewApartment.isGoodLocation({}, 5)).to.throw('Invalid input!');
        });

        it('should return Invalid input!', () => {
            expect(() => findNewApartment.isGoodLocation(5, {})).to.throw('Invalid input!');
        });

        it('should return Invalid input!', () => {
            expect(() => findNewApartment.isGoodLocation([], 5)).to.throw('Invalid input!');
        });
        it('should return Invalid input!', () => {
            expect(() => findNewApartment.isGoodLocation(5, [])).to.throw('Invalid input!');
        });

        it('should return Invalid input!', () => {
            expect(() => findNewApartment.isGoodLocation(123, true)).to.throw('Invalid input!');
        });

        it('should return Invalid input!', () => {
            expect(() => findNewApartment.isGoodLocation('test', 'test')).to.throw('Invalid input!');
        });
        it('should return Invalid input!', () => {
            expect(() => findNewApartment.isGoodLocation('test', false)).not.to.throw();
        });

        it('should return this location is not suitable for you.', () => {
            expect(findNewApartment.isGoodLocation('Montana', true)).to.equal('This location is not suitable for you.');
        });

        it('should return this location is not suitable for you.', () => {
            expect(findNewApartment.isGoodLocation('Burgas', true)).to.equal('This location is not suitable for you.');
        });

        it('should return this location is not suitable for you.', () => {
            expect(findNewApartment.isGoodLocation('Vidin', true)).to.equal('This location is not suitable for you.');
        });

        it('should return there is no public transport in area.', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        });
        it('should return there is no public transport in area.', () => {
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
        });

        it('should return there is no public transport in area.', () => {
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
        });

        it('should return you can go on home tour!', () => {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        });
        it('should return you can go on home tour!', () => {
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
        });

        it('should return you can go on home tour!', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
        });

    });

    describe('Tests for is large enough', () => {

        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough('a', 'a')).to.throw('Invalid input!');
        });

        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough('a', 1)).to.throw('Invalid input!');
        });
        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough(1, 'a')).to.throw('Invalid input!');
        });

        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough({}, 'a')).to.throw('Invalid input!');
        });

        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough('a', {})).to.throw('Invalid input!');
        });

        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough(1, 1)).to.throw('Invalid input!');
        });

        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough([], 10)).to.throw('Invalid input!');
        });

        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough(10, [])).to.throw('Invalid input!');
        });

        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough([70], {})).to.throw('Invalid input!');
        });
        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], 'a')).to.throw('Invalid input!');
        });

        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], undefined)).to.throw('Invalid input!');
        });

        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], null)).to.throw('Invalid input!');
        });

        it('should return invalid input', () => {
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], 'test test')).to.throw('Invalid input!');
        });

        it('should return return the filtered array', () => {

            let apartments = [40, 50, 60, 70, 80];
            let minimalSquareMeters = 60;

            expect(findNewApartment.isLargeEnough(apartments, minimalSquareMeters)).to.equal('60, 70, 80');
        });


        it('should return return the filtered array', () => {

            let apartments = [60];
            let minimalSquareMeters = 60;

            expect(findNewApartment.isLargeEnough(apartments, minimalSquareMeters)).to.equal('60');
        });

        it('should return return the filtered array', () => {

            let apartments = [45, 45, 45];
            let minimalSquareMeters = 45;

            expect(findNewApartment.isLargeEnough(apartments, minimalSquareMeters)).to.equal('45, 45, 45');
        });

        it('should return return the filtered array', () => {

            let apartments = [28, 17, 60, 70, 90];
            let minimalSquareMeters = 50;

            expect(findNewApartment.isLargeEnough(apartments, minimalSquareMeters)).to.equal('60, 70, 90');
        });

    });

    describe('Tests for is aprtment afordable', () => {

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable('a', 'a')).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable(1, 'a')).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable('a', 1)).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable([], 1)).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable(1, [])).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable([], [])).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable([1], [1])).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable('1', '1')).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable({}, '1')).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable({}, {})).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable({}, {})).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable(-5000, 600)).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable(-5000, -600)).to.throw('Invalid input!');
        });

        it('should return invalid input!', () => {
            expect(() => findNewApartment.isItAffordable(0, 0)).to.throw('Invalid input!');
        });

        it('should return you dont have enough money for this house!', () => {
            expect(findNewApartment.isItAffordable(500, 499)).to.equal('You don\'t have enough money for this house!');
        });

        it('should return you dont have enough money for this house!', () => {
            expect(findNewApartment.isItAffordable(500, 100)).to.equal('You don\'t have enough money for this house!');
        });

        it('should return you dont have enough money for this house!', () => {
            expect(findNewApartment.isItAffordable(500, 500)).to.equal('You can afford this home!');
        });

        it('should return you dont have enough money for this house!', () => {
            expect(findNewApartment.isItAffordable(500, 10000)).to.equal('You can afford this home!');
        });

        it('should return you dont have enough money for this house!', () => {
            expect(findNewApartment.isItAffordable(1000, 100000)).to.equal('You can afford this home!');
        });
    });

});
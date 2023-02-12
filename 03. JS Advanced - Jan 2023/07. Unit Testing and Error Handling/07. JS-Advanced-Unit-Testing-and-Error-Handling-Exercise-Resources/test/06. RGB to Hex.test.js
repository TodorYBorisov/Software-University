const { expect } = require('chai');
const { rgbToHexColor } = require('../06. RGB to Hex');

describe('Testing RGB', () => {

    it('Received red as string instead of integer', () => {

        let red = '2';
        let green = 20;
        let blue = 50;

        expect(rgbToHexColor(red, green, blue)).to.be.undefined;
    });

    it('Received green as string instead of integer', () => {

        let red = 20;
        let green = '20';
        let blue = 50;

        expect(rgbToHexColor(red, green, blue)).to.be.undefined;
    });
    it('Received blue as string instead of integer', () => {

        let red = 20;
        let green = 20;
        let blue = '50';

        expect(rgbToHexColor(red, green, blue)).to.be.undefined;
    });

    it('should return #FF0000 for red input 255, 0, 0', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });

    it('should return #00FF00 for green input 0, 255, 0', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });

    it('should return #0000FF for blue input 0, 0, 255', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    it('should return #FFFFFF for white input 255, 255, 255', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('should return undefined for negative red input', () => {
        expect(rgbToHexColor(-1, 255, 255)).to.equal(undefined);
    });

    it('should return undefined for invalid green input', () => {
        expect(rgbToHexColor(255, 256, 255)).to.equal(undefined);
    });

    it('should return undefined for invalid blue input type', () => {
        expect(rgbToHexColor(255, 255, '255')).to.equal(undefined);
    });

});
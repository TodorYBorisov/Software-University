const { expect } = require('chai');
const { mathEnforcer } = require('../04. Math Enforcer');

describe('Match Enforcer', () => {

    // describe('AddFive tests', () => {

    //     it('should return undefined with non-number param', () => {

    //         expect(mathEnforcer.addFive('t')).to.be.undefined;
    //     });
    //     it('should return undefined with non-number param', () => {

    //         expect(mathEnforcer.addFive([1])).to.be.undefined;
    //     });

    //     it('should return undefined with non-number param', () => {

    //         expect(mathEnforcer.addFive({})).to.be.undefined;
    //     });

    //     it('should return 10 when add num param 5', () => {

    //         expect(mathEnforcer.addFive(5)).to.equal(10);
    //     });
    //     it('should return 6.1 when add num param 5', () => {

    //         expect(mathEnforcer.addFive(1.1)).to.closeTo(6.1,0.01);
    //     });
    //     it('should return 2 when add negative num param -3', () => {

    //         expect(mathEnforcer.addFive(-3)).to.equal(2);
    //     });
    //     it('should return 20 when add num param 15', () => {

    //         expect(mathEnforcer.addFive(15)).to.equal(20);
    //     });

    // });

    // describe('SubtractTen Test', () => {

    //     it('should return undefined with non-number param', () => {

    //         expect(mathEnforcer.subtractTen('t')).to.be.undefined;
    //     });
    //     it('should return undefined with non-number param', () => {

    //         expect(mathEnforcer.subtractTen([1])).to.be.undefined;
    //     });

    //     it('should return undefined with non-number param', () => {

    //         expect(mathEnforcer.subtractTen({})).to.be.undefined;
    //     });

    //     it('should return 40 when add num param 10', () => {

    //         expect(mathEnforcer.subtractTen(50)).to.equal(40);
    //     });
    //     it('should return 20 when add num param 15', () => {

    //         expect(mathEnforcer.subtractTen(80)).to.equal(70);
    //     });
    //     it('should return 0 when add num param 10', () => {

    //         expect(mathEnforcer.subtractTen(10)).to.equal(0);
    //     });
    //     it('should return -30 when add num param -20', () => {

    //         expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
    //     });

    //     it('should return 2.1 when add num param -10', () => {

    //         expect(mathEnforcer.subtractTen(12.1)).to.closeTo(2.1,0.01);
    //     });

    // });

    describe('Sum Test', () => {

        it('should return undefined with non-numbers params', () => {

            expect(mathEnforcer.sum([2], [])).to.be.undefined;
        });
        it('should return undefined with non-numbers param', () => {

            expect(mathEnforcer.sum('s', 1)).to.be.undefined;
        });
        it('should return undefined with non-numbers param', () => {

            expect(mathEnforcer.sum('s', 'h')).to.be.undefined;
        });
        it('should return undefined with non-numbers param', () => {

            expect(mathEnforcer.sum(1, 'w')).to.be.undefined;
        });
        it('should return undefined with non-numbers params', () => {

            expect(mathEnforcer.sum('toshko', [])).to.be.undefined;
        });
        it('should return undefined with non-numbers params', () => {

            expect(mathEnforcer.sum({}, {})).to.be.undefined;
        });

        it('should return 2 when both params are numbers', () => {

            expect(mathEnforcer.sum(1, 1)).to.equal(2);
        });
        it('should return 0.5 when both params are numbers', () => {

            expect(mathEnforcer.sum(0.1, 0.4)).to.closeTo(0.5, 0.01);
        });

        it('should return 30 when both params are numbers', () => {

            expect(mathEnforcer.sum(15, 15)).to.equal(30);
        });

        it('should return undefined when one param is string', () => {

            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
        });
        it('should return undefined when params are strings', () => {

            expect(mathEnforcer.sum('t', 't')).to.be.undefined;
        });

        it('should return -30 when both params are negative numbers', () => {

            expect(mathEnforcer.sum(-15, -15)).to.equal(-30);
        });
    });
});
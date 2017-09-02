import { expect } from 'chai';
import Calculator from './calculator';

describe("Calculator", () => {
    describe("Add", () => {
        it("Should return 3 when a = 1 and b = 2", () => {

            let result = Calculator.Add(1,2);

            expect(result).to.equal(3);
        });
    })
});
"use strict";
const chai_1 = require('chai');
const calculator_1 = require('./calculator');
describe("Calculator", () => {
    describe("Add", () => {
        it("Should return 3 when a = 1 and b = 2", () => {
            let result = calculator_1.default.Add(1, 2);
            chai_1.expect(result).to.equal(3);
        });
    });
});
//# sourceMappingURL=calculator.spec.js.map
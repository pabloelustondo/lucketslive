import { expect } from 'chai';
import {LktLucket} from './luckets';
import {LUCKETS} from './luckets.testdata'

describe("Lucket", () => {
        it("it can be created", () => {
            let lucket = new LktLucket();
        });
});

describe("Luckets", () => {
    it("can read test data and all luckets have a name", () => {
        let luckets = LUCKETS;
        luckets.forEach((lkt) => {
            expect(lkt.name.length).to.be.greaterThan(0);
        })
    });
});
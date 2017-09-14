import { expect } from 'chai';
import {LktLucket} from './luckets';
import {LktLucketsUiModel} from './luckets.uimodel';
import {LUCKETS} from './luckets.testdata'

describe("LucketsUiModel", () => {
        it("it can be created", () => {
            let lucketsUiModel = new LktLucketsUiModel(LUCKETS);
        });
    it("it returns the list of all luckets", () => {
        let lucketsUiModel = new LktLucketsUiModel(LUCKETS);
        let luckets = lucketsUiModel.getAllLuckets();
        expect(luckets.length).to.be.eq(LUCKETS.length);
    });
});

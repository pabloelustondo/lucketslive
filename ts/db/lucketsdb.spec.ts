import { expect } from 'chai';
import {LktLucketDB} from './lucketsdb';
import {LktTestLuckets} from '../testdata/testluckets'

describe("Lucket DB", () => {
        it("it can be created", () => {
            let lucketDB = new LktLucketDB();
        });


    it("it connects to db", (done) => {
        let lucketDB = new LktLucketDB();
        lucketDB.connect().then( (db) => {
            expect(db).to.not.be.undefined;
            done()
        })
    });



});
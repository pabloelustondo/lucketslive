import { expect, assert } from 'chai';
import {LktLucketUserDB} from './luckets_userdb';
import {LktTestLuckets} from '../testdata/testluckets'

describe("Lucket User DB", () => {

    let dbconfig = "mongodb://localhost:27017";
    let userkey = "test";
    let lucketDB;

    it("it can be created", () => {
            lucketDB = new LktLucketUserDB(dbconfig, userkey);
    });

    it("drops database for user if exists, or says ns not found", (done) => {

        lucketDB.deleteAllLuckets().then( (luckets) => {
            expect(luckets).to.not.be.undefined;
            done()
        }).catch((err)=> {
            expect(err).to.not.be.undefined;
            expect(err.message).to.be.equal("ns not found");
            done()
        })
    });


    it("gets the existing luckets (empty list) for the user", (done) => {

        lucketDB.getLuckets().then( (luckets:any[]) => {
            expect(luckets).to.not.be.undefined;
            expect(luckets.length).to.be.equal(0);
            done()
        }).catch((err)=> {
            assert.fail(err,undefined,"cannot get luckets");
            done()
        })
    });

    it("insert luckets for the user", (done) => {

        lucketDB.insertLuckets().then( (luckets:{insertedCount}) => {
            expect(luckets).to.not.be.undefined;
            expect(luckets.insertedCount).to.be.equal(1);
            done()
        }).catch((err)=> {
            assert.fail(err,undefined,"cannot get luckets");
            done()
        })
    });

    it("gets the existing luckets (1 lucket) for the user", (done) => {

        lucketDB.getLuckets().then( (luckets:any[]) => {
            expect(luckets).to.not.be.undefined;
            expect(luckets.length).to.be.equal(1);
            done()
        }).catch((err)=> {
            assert.fail(err,undefined,"cannot get luckets");
            done()
        })
    });

});
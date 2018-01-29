/**
 * Created by pabloelustondo on 2017-09-02.
 */

import { MongoClient, Db, Server } from "mongodb";

export class LktLucketUserDB {

    private dbconfig = "mongodb://localhost:27017";
    private userkey = "test";

    constructor(dbconfig, userkey) {
        if (dbconfig) this.dbconfig = dbconfig;
        if (userkey) this.userkey = userkey;
    }

    public deleteAllLuckets() {
        return new Promise((resolve, reject) => {
            let mongoClient = new MongoClient();
            MongoClient.connect(this.dbconfig)
                .then(mc => {
                        mc.db("test").collection(this.userkey).drop()
                            .then((d) => {
                                resolve(d);
                            }).catch((err) => {
                            reject(err);
                        });
                    }
                )
                .catch(err => {
                    reject(err);
                });
        });
    }

    public getLuckets() {
        return new Promise((resolve, reject) => {
            let mongoClient = new MongoClient();
            MongoClient.connect(this.dbconfig)
                .then(mc => {
                        mc.db("test").collection(this.userkey).find().toArray()
                            .then((d) => {
                                resolve(d);
                            }).catch((err) => {
                            reject(err);
                        });
                    }
                )
                .catch(err => {
                    reject(err);
                });
        });
    }

    public insertLuckets() {
        return new Promise((resolve, reject) => {
            let mongoClient = new MongoClient();
            MongoClient.connect(this.dbconfig)
                .then(mc => {
                        mc.db("test").collection(this.userkey).insert({'hi':'hi'})
                            .then((d) => {
                                resolve(d);
                            }).catch((err) => {
                            reject(err);
                        });
                    }
                )
                .catch(err => {
                    reject(err);
                });
        });
    }

}
/**
 * Created by pabloelustondo on 2017-09-02.
 */

import { MongoClient, Db, Server } from "mongodb";

export class LktLucketDB {

    constructor(){
    }

    public connect() {

        return new Promise((resolve,reject) => {
            let mongoClient = new MongoClient();
            MongoClient.connect("mongodb://localhost:27017")
                .then(mc => {
                        mc.db("test").collection("test").find().toArray().then( (d) => {

                            resolve(d);
                        });

                        }
                    )
                })
                .catch(err => {
                    console.log(err);
                });
        });
    }



}
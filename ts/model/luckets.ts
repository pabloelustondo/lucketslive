/**
 * Created by pabloelustondo on 2017-09-02.
 */

export class LktLucket {
    id: number;
    name: string;
    about:string;
    profilePic:string;
    description: string;


    constructor(private fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (let f in fields) {
            this[f] = fields[f];
        }
    }
}

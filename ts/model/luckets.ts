/**
 * Created by pabloelustondo on 2017-09-02.
 */

export enum LktStatus {Blue,Green,White,Yellow,Read,Black};

export class LktEntity {
    id: number;
    name: string;
    description: string;
    comment:string;
}

export class LktAction extends LktEntity {
    status: LktStatus;
}

export class LktLucket extends LktEntity {
    status: LktStatus;
    picture: string;
    dayAction: LktAction;
    weekAction: LktAction;
    seasonAction: LktAction;
    yearAction: LktAction;

    constructor(private fields: any) {
        // Quick and dirty extend/assign fields to this model
        super();
        for (let f in fields) {
            this[f] = fields[f];
        }
    }
}

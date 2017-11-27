/**
 * Created by pabloelustondo on 2017-09-02.
 */

export enum LktStatus {Blue,Green,White,Yellow,Read,Black};

export class LktEntity {
    id?: number;
    name?: string;
    description?: string;
    comment?:string;
}

export class LktAction extends LktEntity {
    points?: number;
    status?: LktStatus;
}

export class LktLucket extends LktEntity {
    status?: LktStatus;
    picture?: string;
    dayAction?: LktAction;
    weekAction?: LktAction;
    monthAction?: LktAction;
    seasonAction?: LktAction;
    yearAction?: LktAction;
    year5Action?: LktAction;
}

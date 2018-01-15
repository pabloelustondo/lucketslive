/**
 * Created by pabloelustondo on 2017-09-02.
 */

export type LktStatus = "blue" | "green" | "white" | "yellow" | "red" | "black" ;


export class LktAction {
    name: string;
    description?: string;
    comment?:string;
    points?: number;
    status?: LktStatus;
}

export class LktLucket {
    id?: string;
    name?: string;
    description?: string;
    comment?:string;
    status?: LktStatus;
    picture?: string;
    dayAction?: LktAction;
    weekAction?: LktAction;
    monthAction?: LktAction;
    seasonAction?: LktAction;
    yearAction?: LktAction;
    year5Action?: LktAction;

}

export class LktLucketModel {
    luckets: LktLucket[];

    constructor(luckets:LktLucket[]){
        this.luckets = luckets
    }

    calculate(){
        //this process will do calculations needed when some luckets have changed
        //will also introduce some defaults

    }
}

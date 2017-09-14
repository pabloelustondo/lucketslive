/**
 * Created by pabloelustondo on 2017-09-02.
 */
import {LktLucket} from './luckets';

export class LktLucketsUiModel {

    private allLuckets: LktLucket[];

    constructor(luckets:LktLucket[]){
        this.allLuckets = luckets;
    }

    getAllLuckets(){
        return this.allLuckets;
    }
}

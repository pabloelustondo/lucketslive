import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LktLucket , LktLucketModel } from '../../../ts/model/luckets'
import { LktTestLuckets } from '../../../ts/testdata/testluckets'

import { Item } from '../models/item';

@Injectable()
export class Items {
  lktModel: LktLucketModel;

  constructor(public http: Http) {
    this.lktModel = new LktLucketModel(LktTestLuckets);
  }

  query(params?: any) {
    return this.lktModel.luckets;
  }

  add(item: Item) {
   //later
  }

  delete(item: Item) {
    //later
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LktLucket  } from '../../../../ts/model/luckets'
import { LktTestLuckets } from '../../../../ts/testdata/testluckets'

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: LktLucket[] = [];

  constructor(public http: Http) {
    let items:LktLucket[]  = LktTestLuckets;

    for (let item of items) {
      this.items.push(item);
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

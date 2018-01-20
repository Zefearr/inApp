import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class PaginationService {

  constructor(private db: AngularFireDatabase ) { } 

  getItems(batch, lastKey?) {
    let query = {
      datee: new Date(),
      orderByKey: true,
      limitToFirst: batch,
    }
    if(lastKey) query['startAt'] = lastKey
    return this.db.list('/products', {
      query 
    })
  }

}

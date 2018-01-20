import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class CollectionService {

  constructor(private db: AngularFireDatabase) { }

  getItems(batch, lastKey?) {
    let query = {
      orderByKey: true,
      limitToFirst: batch,
    }
    if(lastKey) query['startAt'] = lastKey
    return this.db.list('/categories', {
      query 
    })
  }

}

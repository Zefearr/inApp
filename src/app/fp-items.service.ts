import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FpItemsService {

  constructor(private db: AngularFireDatabase) { } 

  getItems(postId, offset, startKey?): FirebaseListObservable<any> {
  
    return this.db.list('/products', {
      query: {
        orderByKey: true,
        startAt: startKey,
        limitToFirst: offset+1  
      }
     
    });

  }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as _ from 'lodash';
import { AngularFireAuth } from 'angularfire2/auth';
import { productComment } from './models/comment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {
  productId: string;
 
  userId: string;
  comments: FirebaseListObservable<any[]> = null;
  comment: FirebaseListObservable<any[]> = null;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      if(auth) this.userId = auth.uid 
    });
  }

 

  updateComment(productId, comment) {
    const data = { [this.userId]: comment }

    this.db.object(`comments/${productId}`).update(data)

  } 

  createComment(productId, comment) {
    const data = { [this.userId]: comment }

    this.db.list(`comments/${productId}`).push(data)

  }  
  delete(productId) {
    this.db.object(`comments/${productId}/${this.userId}`).remove()
  }

  // experements below | replace later
  getReactions(productId, userId): FirebaseObjectObservable<any> {
    return this.db.object(`comments/${productId}/${userId}`) 
  }
 
  get(productId: string): Observable<any[]>{

     const comment$ = this.db.list('comments', {
       query: {
         orderByChild: 'productid',
         equalTo: productId
       }
     }).do(console.log);
     comment$.subscribe();
     return Observable.of([])
}
 
 
 

}

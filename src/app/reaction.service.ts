import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as _ from "lodash";

@Injectable()
export class ReactionService {  

  userId: string;
  emojiList = ['like']
  
  

  // constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
   
  //  }
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      if(auth) this.userId = auth.uid 
    });
  }
   
  //  getItemVotes(productId): FirebaseObjectObservable<any> {
  //   return this.db.object(`upvotes/${productId}`)
  //  }
  //  updateUserVote(productId, userId, vote): void { 
  //    let data = {}
  //    data[userId] = vote
  //    this.db.object(`upvotes/${productId}`).update(data) 
  //  }

   getReactions(productId): FirebaseObjectObservable<any> {
     return this.db.object(`reactions/${productId}`)
   }

   updateReaction(productId, reaction=0) {
     const data = { [this.userId]: reaction }
     this.db.object(`reactions/${productId}`).update(data)
   }
   removeReaction(productId) {
     this.db.object(`reactions/${productId}/${this.userId}`).remove()
   }
   countReactions(reactions) {
     return _.mapValues(_.groupBy(reactions), 'length');
   }
   userReaction(reactions) {
     return _.get(reactions, this.userId)
   } 
 
}

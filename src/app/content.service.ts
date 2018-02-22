import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Content } from './models/content'; 
import * as firebase from 'firebase';

@Injectable()
export class ContentService {

  // timestamp = this.getTimeStamp();  
 
  constructor(private db: AngularFireDatabase ) { } 
 

      create(content) { 
       
        // var sessionsRef = firebase.database().ref("sessions");
        return this.db.list('/content').push(content
          // startedAt: firebase.database.ServerValue.TIMESTAMP
        
        );
         

    }
 

    
    getTimeStamp() {
      const now = new Date();
      const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' +  now.getUTCDate();
      const time = now.getUTCHours() + ':' + now.getUTCMinutes()  + ':' + now.getUTCSeconds();
      return (date + ':' + time);
     
    }
    updateContent(contentId, content) {
      return this.db.object('/content/' + contentId).update(content); 
    }

    getAllContent() {
      return this.db.list('/content');
    } 

    getOne(contentId) {
      return this.db.object('/content/' + contentId); 
    }
 

}

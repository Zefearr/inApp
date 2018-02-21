import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ContentService {

  constructor(private db: AngularFireDatabase ) { } 

      create(content) {
        return this.db.list('/textContent').push(content);
        
      
    }


    getAllContent() {
      return this.db.list('/textContent');
    } 

    getOne(contentId) {
      return this.db.object('/textContent/' + contentId);
    }
 

}

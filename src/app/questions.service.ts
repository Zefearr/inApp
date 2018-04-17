import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class QuestionsService {

  constructor(private db: AngularFireDatabase ) { }

  createPrivacy(privacy) {
    return this.db.list('/privacy').push(privacy);
  }

  updatePrivacy(privacyId, privacy) {
    return this.db.object('/privacy/' + privacyId).update(privacy);
  }
 

  getPrivacy(privacyId) {
    return this.db.object('/privacy/' + privacyId);
  }
  getAllPrivacy() {
    return this.db.list('/privacy');
  }

  create(question) { 
  
    return this.db.list('/questions').push(question);

  } 

  getAll() {
    return this.db.list('/questions');
  }
get(questionId) {
  return this.db.object('/questions/' + questionId);
} 
update(questionId, question) { 
  return this.db.object('/questions/' + questionId).update(question);
}
}

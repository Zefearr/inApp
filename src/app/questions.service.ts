import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class QuestionsService {

  constructor(private db: AngularFireDatabase ) { }

  create(question) { 
  
    return this.db.list('/questions').push(question);

  } 

  getAll() {
    return this.db.list('/questions');
  }
get(questionId) {
  return this.db.object('/questions/' + questionId);
} 
}

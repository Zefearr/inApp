import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';




@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit, OnDestroy  {
  postcomment = {};
  appUser: AppUser;
  userId: any;
  comments: any[];
  subscription: any; 
  @Input() productId: string; 
  

  
  


  constructor(private commentService: CommentService, private auth: AuthService, private db: AngularFireDatabase) { 
   
 
    
   } 
 

    ngOnInit() { 
      // this.comments = this.db.list(`comments/${this.productId}/${this.userId}`);
     
    
    this.subscription = this.auth.appUser$.subscribe(appUser => this.appUser = appUser);  
    
 
   }
   ngOnDestroy() {
     this.subscription.unsubscribe(); 
   }

  delete(val) {
  this.commentService.delete(this.productId);

 }

  
   getTimeStamp() {
    const now = new Date()
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' +  now.getUTCDate();
    const time = now.getUTCHours() + ':' + now.getUTCMinutes()  + ':' + now.getUTCSeconds();
    return now;
   
  }
  CommentIt() {  
  const date = Date.now();
 
 
  
    let postcomment = {
        name: this.appUser.name,
        datePlaced:date,
        reverseDate: 0 - date,
        productid: this.productId,
        productComment: this.postcomment
    }

    this.commentService.updateComment(this.productId, postcomment);
    // this.commentService.createComment(this.productId, postcomment); 

  }

  
 
}

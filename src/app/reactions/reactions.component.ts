import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ReactionService } from '../reaction.service';
import { sum, values } from 'lodash';
import * as _ from "lodash";





@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})

export class ReactionsComponent implements OnInit, OnDestroy {

  @Input() productId: string;
  @Input() contentId: string;

  showEmojis = false;
  emojiList: string[];
  reactionCount: any;
  userReaction: any;
  subscription: any;
  


  constructor(private reactionSvc: ReactionService) {} 

  ngOnInit() {
    this.emojiList = this.reactionSvc.emojiList
    this.subscription = this.reactionSvc.getReactions(this.productId)
        .subscribe(reactions => {
            this.reactionCount = this.reactionSvc.countReactions(reactions)
            this.userReaction = this.reactionSvc.userReaction(reactions)
        });
  }

  // react(val) {
  //   if(this.userReaction === val) {
  //     this.reactionSvc.removeReaction(this.productId)
  //   } else {
  //     this.reactionSvc.updateReaction(this.productId, val)
  //   }
  // } 
  react(val) {
   
      if(this.userReaction === val) {
        this.reactionSvc.removeReaction(this.productId)

      } else {
        this.reactionSvc.updateReaction(this.productId, val) 

      }
   
    console.log();
  }

  emojiPath(emoji) {
    return `assets/reactions/${emoji}.svg`
  }

  hasReactions(index) {
    return _.get(this.reactionCount, index.toString())
  }
 

 
  
  // userId: string;
  // emojiList = ['like']

// @Input() userId: string; 
// @Input() productId: string;   

// voteCount: number = 0;
// userVote: number = 0;
// subscription;
// user;

  // constructor(private reactionSvc: ReactionService, private userService: UserService) { } 
  // constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
  //   this.afAuth.authState.subscribe((auth) => {
  //     if(auth) this.userId = auth.uid 
  //   });
  // }

  // ngOnInit() {
  //   this.subscription = this.reactionSvc.getItemVotes(this.productId)
  //     .subscribe(upvotes => { 
  //       if(this.userId) this.userVote = upvotes[this.userId]
  //       this.voteCount = sum(values(upvotes))
  //     })

  // } 
  // upvote() {
  //   let vote = this.userVote == 1 ? 0 : 1
  //   this.reactionSvc.updateUserVote(this.productId, this.userId, vote)  
  //  console.log(123);
  // }
  // downvote() {
  //   let vote = this.userVote == -1 ? 0 : -1
  //   this.reactionSvc.updateUserVote(this.productId, this.userId, vote)
  // }
  // ngOnDestroy() {
  // this.subscription.unsubscribe() 
  // }
  // get userr() : Observable<User> {
  //   return this.user.switchMap(user => {
  //     if(user) return this.userService.get(user.uid);
  //     return Observable.of(null);
  //   });
  ngOnDestroy() {
    this.subscription.unsubscribe() 
  }
    
  
 
  
  

  

}

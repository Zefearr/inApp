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
   
   
  }

  emojiPath(emoji) {
    return `assets/reactions/${emoji}.svg`
  }

  hasReactions(index) {
    return _.get(this.reactionCount, index.toString())
  }
 
  ngOnDestroy() {
    this.subscription.unsubscribe() 
  }
    
  
 
  
  

  

}

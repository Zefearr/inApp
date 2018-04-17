import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Subscription } from 'rxjs/Subscription';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-pricacy',
  templateUrl: './pricacy.component.html',
  styleUrls: ['./pricacy.component.css']
})
export class PricacyComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  id;
  privacy: FirebaseListObservable<any>;


  constructor(private questionService: QuestionsService) {
   
   }
 
  ngOnInit() {
    this.privacy = this.questionService.getAllPrivacy();
    this.subscription = this.privacy.subscribe();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

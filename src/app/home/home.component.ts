import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { QuestionsService } from '../questions.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { routeFadeStateTrigger, routeSlideTrigger } from '../shared/routeanimations';

export interface Question {
  title?: number;
  question?: string;
  answer?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    routeSlideTrigger
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  @HostBinding('@routeSlideState') routeAnimation = true; 
  shown = false; 
  // questions: Object[];
  hide: boolean;
  // questions;
  hideme = {};
  questions: FirebaseListObservable<Question[]>
  showSpinner: boolean = true;
  subscription: Subscription;
  

  constructor(private questionService: QuestionsService) { 
    // this.questions$ = this.questionService.getAll();  
    // this.hideme = {};  
  
  }

  ngOnInit() {
    this.questions = this.questionService.getAll();
    this.subscription = this.questions.subscribe(() => this.showSpinner = false)  
  }
  ngOnDestroy() {
   this.subscription.unsubscribe();
  }


  onClick() {
    this.shown = !this.shown;
    console.log(123)
   
}
  navState = 'default';
  numberEntered;

  // onClick() {
  //   this.navState = 'expanded';
  //   setTimeout(() => {
  //     this.navState = 'default';
  //   }, 3000);
  //   console.log(123)
  // }

 

}

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { QuestionsService } from '../questions.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('navState', [
      state('default', style({
        transform: 'translateY(-100%)'

      })), 
      state('expanded', style({
        transform: 'translateY(100%)'

      })),
      transition('default <=> expanded', animate('200ms'))
    
    ]),
    trigger('numberEnteredState', [
      state('unselected', style({
        border: '2px solid black',
        padding: '5px'
      })),
      state('selected', style({
        backgroundColor: 'red',
        border: '2px solid black',
        padding: '5px'
      })),
      transition('unselected => selected' , [
        style({
          border: '2px solid black',
          padding: '5px'
        }),
        animate(300)
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  shown = false; 
  // questions: Object[];
  hide: boolean;
  questions$;
  hideme = {};

  constructor(private questionService: QuestionsService) { 
    this.questions$ = this.questionService.getAll();  
    this.hideme = {};  
  
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

  ngOnInit() {
  }

}

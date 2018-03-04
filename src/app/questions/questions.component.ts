import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions$;
  hideme = {};

  constructor(private questionService: QuestionsService) { 
    this.questions$ = this.questionService.getAll(); 
    this.hideme = {};  
  }

  ngOnInit() {
  }

}

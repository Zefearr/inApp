import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent implements OnInit {
  question = {
    title: '',
    ask: '',
    answer: ''
  };
  id;

  constructor(private router: Router, private questionService: QuestionsService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.questionService.get(this.id).take(1).subscribe(p => this.question = p);   
  }

  save(question) { 
    if(this.id) {
      this.questionService.update(this.id, question);
    } else this.questionService.create(question);  
   this.router.navigate(['/admin/faq']);  
  }
 
  ngOnInit() {
  }

}

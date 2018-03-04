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
  question = {};

  constructor(private router: Router, private questionService: QuestionsService, private route: ActivatedRoute) { 
    let id = this.route.snapshot.paramMap.get('id');
    if(id) this.questionService.get(id).take(1).subscribe(p => this.question = p);   
  }

  save(question) { 
   this.questionService.create(question); 
   this.router.navigate(['/admin/faq']);  
  }
 
  ngOnInit() {
  }

}

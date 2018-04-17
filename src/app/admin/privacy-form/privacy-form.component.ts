import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../questions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-privacy-form',
  templateUrl: './privacy-form.component.html',
  styleUrls: ['./privacy-form.component.css']
})
export class PrivacyFormComponent implements OnInit {
privacy = {};
id;
  constructor(private questionService: QuestionsService, private route: ActivatedRoute, private router: Router) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.questionService.getPrivacy(this.id).take(1).subscribe(p => this.privacy = p);   
  }

  ngOnInit() {
  }
save(privacy) {
  if(this.id) {
    this.questionService.updatePrivacy(this.id, privacy);

  } else  this.questionService.createPrivacy(privacy);

   this.router.navigate(['/admin/controls']); 
}

// save(product) { 
    
//   if(this.id) this.productService.update(this.id, product); 
//   else this.productService.create(product);
  
       
//   this.router.navigate(['/admin/products']); 
//   }
}

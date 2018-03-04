import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ContentService } from '../../content.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Content } from '../../models/content';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-tutorial-form',
  templateUrl: './tutorial-form.component.html', 
  styleUrls: ['./tutorial-form.component.css']
})
export class TutorialFormComponent implements OnInit { 
  contentcategories$;
  content = {};
  
  id;

  constructor(
        private route: ActivatedRoute,
        private categoryService: CategoryService,
        private contentService: ContentService,
        private router: Router) { 
        this.contentcategories$ = categoryService.getContentCategories();
        this.id = this.route.snapshot.paramMap.get('id');
        if(this.id) this.contentService.getOne(this.id).take(1).subscribe(p => this.content = p);   
  }
  
  save(content) {  
  
    if(this.id) this.contentService.updateContent(this.id, content);
    else this.contentService.create(content);   
    this.router.navigate(['/admin/tutorials']);  
  }
 
 
  
  

ngOnInit() {
  
}

}

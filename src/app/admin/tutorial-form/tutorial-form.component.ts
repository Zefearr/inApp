import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ContentService } from '../../content.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-tutorial-form',
  templateUrl: './tutorial-form.component.html', 
  styleUrls: ['./tutorial-form.component.css']
})
export class TutorialFormComponent implements OnInit {

  contentcategories$;
  content = {}; 

  constructor(
        private route: ActivatedRoute,
        private categoryService: CategoryService,
        private contentService: ContentService,
        private router: Router) { 
        this.contentcategories$ = categoryService.getContentCategories();
        let id = this.route.snapshot.paramMap.get('id');
        if(id) this.contentService.getOne(id).take(1).subscribe(p => this.content = p);   
  }

  save(content) { 
    // const timestamp = this.getTimeStamp();
   this.contentService.create(content); 
   this.router.navigate(['/admin/tutorials']);
  }
  // getTimeStamp() {
  //   const now = new Date();
  //   const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' +  now.getUTCDate();
  //   const time = now.getUTCHours() + ':' + now.getUTCMinutes()  + ':' + now.getUTCSeconds();
  //   return (date + '' + time);
   
  // }
 
  
  ngOnInit() {  
  }

}

import { Component, OnInit } from '@angular/core';
import { BlogCategoryService } from '../../blog-category.service';
import { BlogService } from '../../blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})

export class BlogFormComponent implements OnInit  {
  blogcategories$;
  id;
  blog = {};
  ad: any;
  adForm: FormGroup;
  
  
  // blog = {};

  constructor
    (blogCategory: BlogCategoryService,
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute) {

      this.blogcategories$ = blogCategory.getBlogCategories();
      
      let id = this.route.snapshot.paramMap.get('id');
      if(id) {
        this.blogService.getOneBlog(id).take(1).subscribe(p => this.blog = p); 
      }
     
     
    }
   

    

  save(blogpost) {   
  
    if(this.id) {
      this.blogService.update(this.id, blogpost); 
      
    } else this.blogService.create(blogpost);   

      this.router.navigate(['/admin/blog']);  
  }


  getTimeStamp() {
    const now = new Date().toLocaleString();
    // const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' +  now.getUTCDate();
    // const time = now.getUTCHours() + ':' + now.getUTCMinutes()  + ':' + now.getUTCSeconds();
    return now;
   
  }

  ngOnInit() { 
  }

}

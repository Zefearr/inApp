import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service'; 
import { Router } from '@angular/router';  
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { AppUser } from '../../models/app-user';
import { AuthService } from '../../auth.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {  
 categories$;
 product = {}; 
 id;
 date = new Date();
 appUser: AppUser;
 

 

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private auth: AuthService,
    private productService: ProductService) { 
    this.categories$ = categoryService.getCategories(); 
    
    auth.appUser$.subscribe(appUser => this.appUser = appUser);  
    
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);   

    
      

   
  }
  save(product) { 
  if(this.id) this.productService.update(this.id, product); 
  else this.productService.create(product);
  
       
  this.router.navigate(['/admin/products']);
  }
  delete() {
    if(confirm('Точно удалить?')) {
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
      
    }
  }

  ngOnInit() {
  }
 

}

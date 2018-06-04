import { Component, OnInit, Input, Directive } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service'; 
import { Router } from '@angular/router';  
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Product } from '../../models/product';   
import { AuthService } from '../../auth.service';
import { DatePipe } from '@angular/common';
import { NgControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],

})


export class ProductFormComponent {  
 categories$;

 product = {
   price: '',
   lang: '',
   startdate: '',
   status: '', 
   title: '',
   desc: '',
   location: '',
   imageUrl: '',
   category: '',
   content: '',
   bigimageUrl: ''

 };  

 id;
 status$;
 switch = false;
 toggle = true;
 showcard = true;
  disabled: boolean;
  title: string;
  price: string;

  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private auth: AuthService,
    private productService: ProductService) { 
      
    this.categories$ = categoryService.getCategories(); 
    this.status$ = categoryService.getStatus(); 

    
    
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);   

    
   
  
  }
  toggleSwitch() {
    this.switch = !this.switch
  }

  
  
  onClick() {
    this.toggle = !this.toggle;
    this.switch = !this.switch;
  }

  showPrev() {
    this.showcard = !this.showcard;
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
 
 
 

}

import { Component, OnInit, Input, trigger, state, style, transition, animate  } from '@angular/core';
import { Product } from './../models/product'; 



import { Router } from '@angular/router';  
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
}) 

export class ProductCardComponent {
state = 'on'; 
cart$;
id; 

@Input('product') product: Product; 
@Input('show-actions') showActions = true;
@Input('shopping-cart') shoppingCart;


 


 
 products$;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { 
   
      this.products$ = this.productService.getAll();  

   } 


  
  
  
  
}



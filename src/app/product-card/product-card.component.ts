import { Component, OnInit, Input, trigger, state, style, transition, animate  } from '@angular/core';
import { Product } from './../models/product'; 



import { Router } from '@angular/router';  
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'], 
  animations: [
    trigger ('cartState', [
      state('on', style({
       visibility: 'visible'
      })),
      state('off', style({
        visibility: 'hidden'
      })),
      transition('on <=> off', animate(100)) 
    ])
  ]
}) 

export class ProductCardComponent {
state = 'on';


cart$;
id;
shoppingCartItemCount:number;
@Input('product') product: Product; 
@Input('show-actions') showActions = true;
@Input('shopping-cart') shoppingCart;

// closeEvent() {
//    this.state2 == 'on' ? this.state = 'off' : this.state = 'on';
//  }
 


 expandContent() {
  //  this.state == 'on' ? this.state = 'off' : this.state = 'on';
  
   console.log(123);
 }
 products$;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { 
   
      this.products$ = this.productService.getAll(); 

   } 


  
  
  
  
}



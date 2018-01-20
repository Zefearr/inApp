import { Component, OnInit, Input, trigger, state, style, transition, animate  } from '@angular/core';
import { Product } from './../models/product'; 
import { ShoppingCartService } from '../shopping-cart.service'; 
import { ShoppingCartItem } from "./../models/shopping-cart-item";
import { ShoppingCart } from '../models/shopping-cart';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
     
        height: 'auto'
      })),
      state('big', style({
        
        height: '0'
      })),
      transition('normal <=> big', animate(300)) 
    
    ])
  ]
}) 

export class ProductCardComponent implements OnInit {
state = 'big';
cart$;
shoppingCartItemCount:number;
@Input('product') product: Product; 
@Input('show-actions') showActions = true;
@Input('shopping-cart') shoppingCart;
 
 expandContent() {
   this.state == 'normal' ? this.state = 'big' : this.state = 'normal';
 }
  constructor(private shoppingCartService: ShoppingCartService) { } 

  addToCart() {
  this.shoppingCartService.addToCart(this.product); 
  }
  removeFromCart() {
    this.shoppingCartService.deleteFromCart(this.product);
    
  } 
  async ngOnInit() {
    
    let cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe(cart => {
      this.shoppingCartItemCount = 0; 
      for(let productId in cart.items)  
        this.shoppingCartItemCount += cart.items[productId].quanity
     
    }); 
  }

  
  
  
  getQuanity() { 
    if(!this.shoppingCart) return 0;

     let item = this.shoppingCart.items[this.product.$key];
     return item ? item.quanity : 0;
     
  }
  
}



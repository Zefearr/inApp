import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy { 
  shipping = {};
  cart: ShoppingCart;
  subscription: Subscription;
  constructor(private shoppingCartService: ShoppingCartService ) { }

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe(cart => this.cart = cart);
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
      }

  placeOrder() {
    let order = {
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
    }
   

  
  }
  
  
    

}

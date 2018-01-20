
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from './../models/app-user'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../models/shopping-cart';







@Component({ 
  selector: 'appnavbar',
  templateUrl: './appnavbar.component.html', 
  styleUrls: ['./appnavbar.component.css'] 
})
export class AppnavbarComponent implements OnInit { 
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  shoppingCartItemCount:number;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) { 
    
    // auth.appUser$.subscribe(x => console.log(x));   
      
  }
  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser); 
    
    let cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe(cart => {
      this.shoppingCartItemCount = 0; 
      for(let productId in cart.items)  
        this.shoppingCartItemCount += cart.items[productId].quanity
     
    }); 
  }

  logout() {
    this.auth.logout();  
  }

}

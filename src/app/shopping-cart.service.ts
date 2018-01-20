
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database'; 

import { AppUser } from './models/app-user';
import { ShoppingCart } from './models/shopping-cart'; 
import { Product } from './models/product';  
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';








@Injectable()
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase ) { }

  async getCart(): Promise<Observable<ShoppingCart>> {      
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId)
    .map(x => new ShoppingCart(x.items)); 
    
  } 
private create() {
 return this.db.list('/shopping-carts').push({
    dateCreated: new Date().getTime() 
    });
  } 

 async clearCart() { 
  let cartId = await this.getOrCreateCartId();
  this.db.object('/shopping-carts/' + cartId + '/items').remove(); 
  } 
  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId); 
  }

 
  private async getOrCreateCartId()  {      
    let cartId = localStorage.getItem('cartId'); 
    if(cartId) return cartId;

      let result = await this.create();
      localStorage.setItem('cartId', result.key);  
      return result.key;
    
  }

  async addToCart(product: Product) {
    this.updateItemQuanity(product, 1);
    
  }


  async deleteFromCart(product: Product) { 
  this.updateItemQuanity(product, -1);  
  }

  private async updateItemQuanity(product: Product, change: number) {   
    let cartId = await this.getOrCreateCartId(); 
    let item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {item$.update({ product: product, quanity: (item.quanity || 0) + change });
    });
  }
}

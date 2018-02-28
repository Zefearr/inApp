import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { last } from '@angular/router/src/utils/collection';

@Injectable()
export class ProductService { 

  constructor(private db: AngularFireDatabase) { }
 
  create(product) {
 
    return this.db.list('/products').push(product);  
   
  }

  getSome(batch, lastKey?) {
    let query = {
      orderByKey: true,
      limitToFirst: batch
    }
    if(lastKey) query['startAt'] = lastKey 
    return this.db.list('/products', {
      query
    });
  }
  
  getAll() {
  
    return this.db.list('/products'); 
  }
  
  get(productId) {
    return this.db.object('/products/' + productId); 
  }
  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
    
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove(); 
  }

}

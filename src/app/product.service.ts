import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProductService { 

  constructor(private db: AngularFireDatabase) { }

  getProducts(start, end): FirebaseListObservable<any> {
    return this.db.list('/products', {
      query: {
        orderByChild: 'title',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
    });
  }
 
  create(product) {
 
    return this.db.list('/products').push(product);  
   
  }

 

  getAll() {
  
    return this.db.list('/products', {  
      query: {
        orderByChild: 'startdate'
      }
    }); 
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

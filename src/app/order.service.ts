import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class OrderService { 
 
  constructor(private db: AngularFireDatabase) { }  

  storeOrder(order) {
    return this.db.list('/orders').push(order); 
  }
  getAll() {
    return this.db.list('/orders'); 
  }
  get(orderId) {
    return this.db.object('/orders/' + orderId); 
  }

}

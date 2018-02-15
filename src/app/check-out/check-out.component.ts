import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';
import { Product } from '../models/product'; 
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database'; 
import { Input } from '@angular/core';
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html', 
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent  {  
 
  order = {}; 
 
  id = this.route.snapshot.paramMap.get('id');
  @Input('product') product: Product; 

  

  subscription: Subscription
  constructor(private orderService: OrderService,
    private route: ActivatedRoute,
  private productService: ProductService) {
    let id = this.route.snapshot.paramMap.get('id');  
    if(id) this.productService.get(id).take(1).subscribe(p => this.product = p); 
   }

   
   
 
  placeOrder() {
    let order = {
      title: this.product.title, 
      datePlaced: new Date().toLocaleString(),
      order: this.order
    
     
    } 
    this.orderService.storeOrder(order);
  }
  
 

}

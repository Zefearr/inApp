import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchmap';
import { DatePipe } from '@angular/common';
import { async } from '@angular/core/testing';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
// import { AppUser } from '../models/app-user';
import { AppUser } from './../models/app-user'; 
import { UserService } from '../user.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Subject } from 'rxjs/Subject'; 






@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']  
})
export class ProductsComponent   {  
 

  
 
  filteredProducts: Product[] = []; 
  categories$;
  status$;
  category: string; 
  status: string; 
  products;
  lastKey = '';
  subscription: Subscription; 
  user:AppUser; 

  
startAt = new Subject()
endAt = new Subject()


  constructor(
    route: ActivatedRoute,
    userService: UserService,
    private productService: ProductService,
    categoryService: CategoryService) {
  
    productService 
     .getAll() 
     .switchMap(products => {
      this.products = products;
      return route.queryParamMap;
      }).subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category == this.category) :   
        this.products; 
        // this.status = params.get('status');
        // this.filteredProducts = (this.status) ?
        // this.products.filter(p => p.status == this.status) :   
        // this.products; 
      });
    this.categories$ = categoryService.getCategories();
    this.status$ = categoryService.getStatus(); 
   }
   

// ngOnInit() {
//   this.productService.getProducts(this.startAt, this.endAt)
//   .subscribe(products => this.products = products)
// }
lastKeypress: number = 0;



search($event) {
  if ($event.timeStamp - this.lastKeypress > 200) {
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
  }
  this.lastKeypress = $event.timeStamp
}
  
   
  

}

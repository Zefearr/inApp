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
import { query } from '@angular/core/src/animation/dsl';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']  
})
export class ProductsComponent  {  
  
  filteredProducts: Product[] = [];
  categories$;
  category: string;
  products;
  lastKey = '';
  subscription: Subscription; 
  user:AppUser; 

  // products = new BehaviorSubject([]); 
  batch = 10;
  finished = false; 



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
       
      });

     
   
    this.categories$ = categoryService.getCategories();

   

      
 
   }

  
  
  // ngOnInit() {
  //   this.getSome()
  // }
  
  // onClicked() {
  //   this.getSome()
  // }

//  private getSome(key?) { 
//     if(this.finished) return
//     this.productService.getSome(this.batch+1, this.lastKey) 
//     .do(products => {
//       this.lastKey = _.last(products)['$key']
//       const newproducts = _.slice(products, 0, this.batch)
//       const currentproducts = this.products.getValue()

//       if(this.lastKey == _.last(newproducts['$key'])) {
//         this.finished = true
//       } 
      
      

//       this.products.next( _.concat(currentproducts, newproducts) )
//     }).take(1).subscribe() 

    
//   }
  

}

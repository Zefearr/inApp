
import * as $ from 'jquery'; 
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service'; 
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchmap'; 
import { DatePipe } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { async } from '@angular/core/testing';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription'; 
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';




@Component({
  selector: 'app-slide', 
  templateUrl: './slide.component.html', 
  styleUrls: ['./slide.component.css']
})
 
export class SlideComponent {
  

  


  productService: any;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category: string;
  cart: any;
  subscription: Subscription;
   
  constructor(
    route: ActivatedRoute,
    productService: ProductService,
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
    

  

}
 
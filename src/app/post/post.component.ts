import { Component, OnInit, Input, trigger, state, style, transition, animate  } from '@angular/core';
import { Product } from './../models/product'; 
import { Router } from '@angular/router';  
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service'; 


import 'rxjs/add/operator/take'; 

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'] 
})



export class PostComponent {   

 
  product;

  constructor(
  private productService: ProductService,
  private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');  
    if(id) this.productService.get(id).take(1).subscribe(p => this.product = p); 
  }
  



}

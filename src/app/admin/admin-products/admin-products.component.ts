import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { RouterModule } from '@angular/router'; 
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';  
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';  


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
products: Product[]; 
filteredProducts: any[];
subscription: Subscription;
id;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute) {
   
    this.subscription = this.productService.getAll()
    .subscribe(products => this.filteredProducts = this.products = products);

   }
   filter(query: string) {
     this.filteredProducts = (query) ?
     this.products.filter(p => p.title.toLowerCase().includes(query.toLocaleLowerCase())) :
     this.products;
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 

}

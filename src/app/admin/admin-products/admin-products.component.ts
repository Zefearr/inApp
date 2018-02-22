import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { RouterModule } from '@angular/router'; 
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';  
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';  
import { DataTableResource } from 'angular5-data-table';



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
tableResource: DataTableResource<Product>;
items: Product[] = [];
itemCount: number;

  // constructor(
  //   private router: Router,
  //   private productService: ProductService,
  //   private route: ActivatedRoute) {
   
  //   this.subscription = this.productService.getAll()
  //   .subscribe(products => this.filteredProducts = this.products = products);

  //  }
   constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute) {
   
    this.subscription = this.productService.getAll()
    .subscribe(products => {
      this.products = products;
      this.initializeTable(products); 
    });

   }
   reloadItems(params) {

    if(!this.tableResource) return;

    this.tableResource.query(params)
    .then(items => this.items = items);
   }

   private initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({offset:0})
    .then(items => this.items = items);
    this.tableResource.count()
    .then(count => this.itemCount = count);
   }

   filter(query: string) {
     let filteredProducts = (query) ?
     this.products.filter(p => p.title.toLowerCase().includes(query.toLocaleLowerCase())) :
     this.products;
     this.initializeTable(filteredProducts);
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  delete() {
    if(confirm('Точно удалить?')) {
      this.productService.delete(this.id);
     
      
    }
  } 
 

}

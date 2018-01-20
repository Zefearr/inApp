import { Component, OnInit } from '@angular/core';
import { FpItemsService } from '../fp-items.service'; 
import * as _ from "lodash";
// import { CategoryService } from '../category.service';
// import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
// import { ProductService } from '../product.service';



@Component({
  selector: 'app-fp-items',
  templateUrl: './fp-items.component.html',
  styleUrls: ['./fp-items.component.css']
})
export class FpItemsComponent implements OnInit {
  
  
  products: any;
  offset = 1;
  nextKey: any;
  prevKeys: any[] = [];
  subscription: any;
  categories$;
  category: string;
  filteredProducts: Product[] = [];
 
 
  

  constructor(
   
    // productService: ProductService,
   
    private itemsSvc: FpItemsService) { 
    
     }
  
  ngOnInit() {
    this.getItems();
   
  }
  nextPage() { 
    this.prevKeys.push(_.first(this.products)['$key'])
    this.getItems(this.nextKey)
  }
  prevPage() {
    const prevKey = _.last(this.prevKeys)
    this.prevKeys = _.dropRight(this.prevKeys)
    this.getItems(prevKey) 
  }

  private getItems(key?) {
    this.subscription = this.itemsSvc.getItems('products', this.offset, key)
    .subscribe(products => {
      this.products = _.slice(products, 0, this.offset) 
      this.nextKey = _.get(products[this.offset], '$key')
    });
  }
  
}

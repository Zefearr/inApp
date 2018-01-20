import { Component, OnInit } from '@angular/core'; 
import { PaginationService } from '../pagination.service'; 
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpinnerComponent } from './../spinner/spinner.component';  
import 'rxjs/add/operator/do'; 
import { Pipe, PipeTransform } from '@angular/core';





@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
  
})
export class CollectionComponent implements OnInit {

  products = new BehaviorSubject([]);
  batch = 2
  lastKey = ''
  finished = false


  constructor(private paginationService: PaginationService ) { }

  

  ngOnInit() {
    this.getItems()
  }
  onScroll() { 
    
    this.getItems()
  }

  private getItems(key?) {
    if(this.finished) return
    this.paginationService.getItems(this.batch+1, this.lastKey)
    .do(products => {
      this.lastKey = _.last(products)['$key']
      const newProducts = _.slice(products, 0, this.batch)
      const currentProduct = this.products.getValue() 

      if(this.lastKey == _.last(newProducts)['$key']) {
        this.finished = true
      }

      this.products.next( _.concat(currentProduct, newProducts) )
    })
    .take(1)
    .subscribe()
  }

  

}

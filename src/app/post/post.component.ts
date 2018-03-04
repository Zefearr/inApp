import { Component, OnInit, Input, trigger, state, style, transition, animate, Renderer2, OnDestroy  } from '@angular/core';
// import { Product } from './../models/product';  
import { Router } from '@angular/router';  
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service'; 




import 'rxjs/add/operator/take'; 
import { showStateTrigger } from './animations';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})



export class PostComponent implements OnDestroy  {   
 
  toggle = false;
  product;
  isShown = false;


  constructor(private productService: ProductService, private route: ActivatedRoute, private renderer: Renderer2) {

    let id = this.route.snapshot.paramMap.get('id'); 

    if(id) {
      this.productService.get(id).take(1).subscribe(p => this.product = p); 
     
    } 

    
   
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }
 
   onClick() {
     this.isShown = !this.isShown;
     if(this.isShown) {
      this.renderer.addClass(document.body, 'modal-open');
     } else
      
     this.renderer.removeClass(document.body, 'modal-open');
     
   }
  onMouseEnter() {
    this.toggle = !this.toggle;
  }
   
  mouseEnter(div : string){
    console.log("mouse enter : " + div);
 }

 mouseLeave(div : string){
   console.log('mouse leave :' + div);
 }

}
 
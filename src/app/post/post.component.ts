import { Component, OnInit, Input, trigger, state, style, transition, animate, Renderer2, OnDestroy, Pipe, PipeTransform  } from '@angular/core';
// import { Product } from './../models/product';  
import { Router } from '@angular/router';  
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take'; 
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import { Comment } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Http } from '@angular/http';
import { FacebookService, InitParams } from 'ngx-facebook';
import {Location} from '@angular/common';
 




@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})




export class PostComponent implements OnInit, OnDestroy  {   
  


  toggle = false;
  product;
  productId: string;
  isShown = false;
  subscription: Subscription;
  userId:string;



 



  constructor(
     private afAuth: AngularFireAuth,
      private db: AngularFireDatabase,
       private productService: ProductService,
        private route: ActivatedRoute,
        private fb: FacebookService,
        private _location: Location,
        private renderer: Renderer2) {
        let id = this.route.snapshot.paramMap.get('id'); 
        this.afAuth.authState.subscribe((auth) => {
            if(auth) this.userId = auth.uid 
        });

          if(id) {
        
            this.productService.get(id).take(1).subscribe(p => this.product = p);

          } 

       
          let initParams: InitParams = {  
            appId: '190229558416176',
            xfbml: true, 
            version: 'v2.8'
          };
        
          fb.init(initParams);
          
       
        


         
         

        
  }

  backClicked() {
    this._location.back();
    console.log('123')
  } 

  ngOnInit() {   
 
  
  }
  

 
 

  ngOnDestroy() {

  
    this.renderer.removeClass(document.body, 'modal-open');
  }
 
  
 
   onClick() {
     this.isShown = !this.isShown;
    //  if(this.isShown) {
    //   this.renderer.addClass(document.body, 'modal-open');
    //  } else
      
    //  this.renderer.removeClass(document.body, 'modal-open');
     
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
 
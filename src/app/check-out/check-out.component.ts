import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';
import { Product } from '../models/product'; 
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database'; 
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { trigger, state, style, animate, transition, query, group } from '@angular/animations'; 
import { AuthService } from './../auth.service';
import { AppUser } from './../models/app-user'; 

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html', 
  styleUrls: ['./check-out.component.css'],
  animations: [
    trigger('regState', [
      state('show', style({
        height: '*'
      })),
      state('hide', style({
        height: 0,
        padding: 0,
        border: 0
      })),
      transition('show <=> hide', animate('300ms ease')), 
    ])
  ]

}) 
export class CheckOutComponent implements OnInit, OnDestroy  {  
  appUser: AppUser; 
  show = false;
  order = {}; 
  state = 'on'; 
  userId: string;
  userSubscription: Subscription;
  email: string;
  id = this.route.snapshot.paramMap.get('id');
  @Input('product') product: Product; 

  

  subscription: Subscription;
  constructor(private orderService: OrderService,
    private router: Router, 
    private auth: AuthService,
    private route: ActivatedRoute,
    private productService: ProductService) {
    let id = this.route.snapshot.paramMap.get('id');  
    if(id) this.productService.get(id).take(1).subscribe(p => this.product = p); 
   }

   expandContent() { 
    
  this.show = !this.show;
    
  }
 
   get State() { 
     return this.show ? 'show' : 'hide'
   }
 
  placeOrder() { 
   
    let order = {
      title: this.product.title, 
      datePlaced: new Date().toLocaleString(),
      order: this.order
    
     
    } 
 
   this.orderService.storeOrder(order); 
    this.router.navigate(['/order-success']); 
     
    
      
  }
  ngOnDestroy() {  
   
  }
  
  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser); 

    
    

  }
 
 

}

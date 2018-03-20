import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit {
  orders;
  id: string;
  
  constructor(private orderService: OrderService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.orderService.get(this.id).take(1).subscribe(p => this.orders = p); 
    console.log(this.orders);
   
   }

  ngOnInit() {
  }

}

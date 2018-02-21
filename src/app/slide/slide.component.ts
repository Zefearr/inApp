
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
import { OrderService } from '../order.service';
import { ContentService } from '../content.service';




@Component({
  selector: 'app-slide', 
  templateUrl: './slide.component.html', 
  styleUrls: ['./slide.component.css']
})
 
export class SlideComponent {
  
  content$;
  constructor(contentService: ContentService) { 
   this.content$ =  contentService.getAllContent();
   }
  

}
 
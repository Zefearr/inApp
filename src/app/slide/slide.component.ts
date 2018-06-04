
import * as $ from 'jquery'; 
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service'; 
import { ActivatedRoute } from '@angular/router'; 
import 'rxjs/add/operator/switchmap';  

import { SwiperModule } from 'ngx-swiper-wrapper';

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
  config;
  content$;

  constructor(contentService: ContentService, route: ActivatedRoute) { 
   this.content$ =  contentService.getAllContent();
 
  

   }
  

}
 
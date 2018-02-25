import { Component, OnInit, Input } from '@angular/core';

import { ContentService } from '../content.service';
import { Content } from '../models/content';
import { Router } from '@angular/router';  
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})


export class TutorialsComponent implements OnInit {

  content;
  id: string;
  
  constructor(private contentService: ContentService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.contentService.getOne(this.id).take(1).subscribe(p => this.content = p); 
   
   }
  

  ngOnInit() {
  }

}

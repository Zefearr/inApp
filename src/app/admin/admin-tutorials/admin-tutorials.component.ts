import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../content.service';

@Component({
  selector: 'app-admin-tutorials',
  templateUrl: './admin-tutorials.component.html',
  styleUrls: ['./admin-tutorials.component.css']
})
export class AdminTutorialsComponent implements OnInit {
content$;

  constructor(private contentService: ContentService ) {
    this.content$ = this.contentService.getAllContent();
  
   }
 
  ngOnInit() {
  }

}

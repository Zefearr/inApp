import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';

import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
 

  constructor(private blogService: BlogService) { 

  }

  ngOnInit() {

  }
  

}

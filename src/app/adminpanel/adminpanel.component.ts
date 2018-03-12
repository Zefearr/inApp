import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from './../models/app-user'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {



  

  constructor() { 
    
    // auth.appUser$.subscribe(x => console.log(x));   
      
  }
  ngOnInit() { 
  

  }

 

}

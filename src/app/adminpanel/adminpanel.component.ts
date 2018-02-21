import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from './../models/app-user'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  appUser: AppUser; 

  

  constructor(private auth: AuthService) { 
    
    // auth.appUser$.subscribe(x => console.log(x));   
      
  }
  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser); 

  }

  logout() {
    this.auth.logout();  
  }

}

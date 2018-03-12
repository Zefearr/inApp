
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from './../models/app-user'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable'; 







 


@Component({ 
  selector: 'appnavbar',
  templateUrl: './appnavbar.component.html', 
  styleUrls: ['./appnavbar.component.css']
})
export class AppnavbarComponent implements OnInit { 
  appUser: AppUser; 
  toggle = false;
  
 

  constructor(private auth: AuthService) { 
    
    auth.appUser$.subscribe(x => console.log(x));   
      
  }
  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser); 

  }

  logout() { 
    this.auth.logout();  
  }
  onClick() {
    this.toggle = !this.toggle;
   
  }

}
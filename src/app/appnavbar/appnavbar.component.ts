
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from './../models/app-user'; 







@Component({ 
  selector: 'appnavbar',
  templateUrl: './appnavbar.component.html', 
  styleUrls: ['./appnavbar.component.css']
})
export class AppnavbarComponent { 
  appUser: AppUser;

  constructor(private auth: AuthService) { 
    auth.appUser$.subscribe(appUser => this.appUser = appUser);   
      
  }

  logout() {
    this.auth.logout(); 
  }

}

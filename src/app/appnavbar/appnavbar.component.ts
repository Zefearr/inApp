
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppUser } from './../models/app-user'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable'; 







 


@Component({ 
  selector: 'appnavbar',
  templateUrl: './appnavbar.component.html', 
  styleUrls: ['./appnavbar.component.css']
})
export class AppnavbarComponent implements OnInit, OnDestroy { 
  appUser: AppUser; 
  toggle = false;
  subscription: any;
  
 

  constructor(private auth: AuthService) { 
    
   
      
  }
  async ngOnInit() { 
   this.subscription = this.auth.appUser$.subscribe(appUser => this.appUser = appUser); 

  }

  logout() { 
    this.auth.logout();  
  }
  onClick() {
    this.toggle = !this.toggle;
   
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
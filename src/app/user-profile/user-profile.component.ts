import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
subscription: any;
appUser: AppUser; 
  constructor(private auth: AuthService) { } 

  async ngOnInit() { 
    this.subscription = this.auth.appUser$.subscribe(appUser => this.appUser = appUser); 
 
   }
   ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  updateInfo() {
    console.log('123')
  }

}

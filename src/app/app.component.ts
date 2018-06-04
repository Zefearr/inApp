import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import * as firebase from 'firebase';
// import $ from 'jquery';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { trigger, transition, group, query, style, animate } from '@angular/animations'; 
import { AgmCoreModule } from '@agm/core';  
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css'], 
})
export class AppComponent  { 
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}
mode = new FormControl('over');
constructor(private userService: UserService, private auth: AuthService, router: Router) {  
  auth.user$.subscribe(user => { 
    if(user) { 
      userService.save(user);
     
      let returnUrl = localStorage.getItem('returnUrl');
      router.navigateByUrl(returnUrl);
    }
  });
  
}

getDepth(outlet) {
  return outlet.activatedRouteData['depth'];
}
}


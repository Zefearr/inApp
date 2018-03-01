import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import * as firebase from 'firebase';
import $ from 'jquery';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
import { AgmCoreModule } from '@agm/core';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'], 
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2', [
        style({ height: "*"}),
        query(':enter', style({transform: 'translateY(100%)'})),
        query(':enter, :leave',  style({position: 'absolute', left: 0, top: 0, right: 0})),
        group([
          query(':leave', [animate('.3s cubic-bezier(.35, 0, .25, 1)',  style({ transform: 'translateY(-100%)'}))]), 
          query(':enter', [animate('.3s cubic-bezier(.35, 0, .25, 1)',  style({ transform:  'translateY(0)'}))])
        ])
      ]),

      transition('2 => 1', [
        style({ height: "*"}),
        query(':enter', style({transform: 'translateY(-100%)'})),
        query(':enter, :leave',  style({position: 'absolute', left: 0, top: 0, right: 0})),
        group([
          query(':leave', [animate('.3s cubic-bezier(.35, 0, .25, 1)',  style({ transform: 'translateY(100%)'}))]), 
          query(':enter', [animate('.3s cubic-bezier(.35, 0, .25, 1)',  style({ transform:  'translateY(0)'}))])
        ])
      ]),
      transition('2 => 3', [
        style({ height: "!"}),
        query(':enter', style({transform: 'translateY(100%)'})),
        query(':enter, :leave',  style({position: 'absolute', left: 0, top: 0, right: 0})),
        group([
          query(':leave', [animate('.3s cubic-bezier(.35, 0, .25, 1)',  style({ transform: 'translateY(-100%)'}))]), 
          query(':enter', [animate('.3s cubic-bezier(.35, 0, .25, 1)',  style({ transform:  'translateY(0)'}))])
        ])
      ]),
      transition('3 => 1', [
        style({ height: "!"}),
        query(':enter', style({transform: 'translateY(-100%)'})),
        query(':enter, :leave',  style({position: 'absolute', left: 0, top: 0, right: 0})),
        group([
          query(':leave', [animate('.3s cubic-bezier(.35, 0, .25, 1)',  style({ transform: 'translateY(100%)'}))]), 
          query(':enter', [animate('.3s cubic-bezier(.35, 0, .25, 1)',  style({ transform:  'translateY(0)'}))])
        ])
      ]),
      

    ])
  ]
})
export class AppComponent  { 


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


import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import "rxjs/add/observable/of";
import * as firebase from 'firebase';  
import { ActivatedRoute, Router } from '@angular/router';  
import { AppUser } from './models/app-user';
import { UserService } from './user.service'; 
 




 
@Injectable()
export class AuthService { 
  
  user$: Observable<firebase.User>;
  error: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute) {   
    this.user$ = afAuth.authState;   
    
   }
  login() { 
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';  
    localStorage.setItem('returnUrl', returnUrl); 
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());    
      
  }
   

  signInWithFacebook() {
    return this.afAuth.auth.signInWithRedirect( 
      new firebase.auth.FacebookAuthProvider());
  }

  logout() {
      this.afAuth.auth.signOut();  
  }

  get appUser$() : Observable<AppUser> {
    return this.user$.switchMap(user => {
      if(user) return this.userService.get(user.uid);
      return Observable.of(null);
    });
    
  }

  
 
}

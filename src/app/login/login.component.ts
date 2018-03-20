
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router, public af: AngularFireAuth) { 
 
  }
 

login() {
  this.auth.login();  

}
signInWithFacebook() {
  this.auth.signInWithFacebook()
  .then((res) => { 
      this.router.navigate(['/about'])
    })
  .catch((err) => console.log(err));
}



}

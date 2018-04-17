import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService2 } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService2) { }

  ngOnInit() {
  } 
  onSignIn(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    this.auth.signinUser(email, password);    
  }
  resetPassword(email: string) {
    this.auth.resetPassword(email)
}

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService2 } from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private authService: AuthService2, private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
  }
  onSignup(form: NgForm) {
    // const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);  
    this.router.navigate(['/']);
   
  }
}

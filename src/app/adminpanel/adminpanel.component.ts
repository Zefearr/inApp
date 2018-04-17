import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from './../models/app-user'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {


privacy$;
  

  constructor(private questionService: QuestionsService) { 
    
    // auth.appUser$.subscribe(x => console.log(x)); 
    this.privacy$ = this.questionService.getAllPrivacy();  
      
  }
  ngOnInit() { 
  

  }

 

}

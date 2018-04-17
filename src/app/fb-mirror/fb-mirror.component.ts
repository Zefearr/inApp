import { Component, OnInit } from '@angular/core';
import { InitParams, FacebookService } from 'ngx-facebook';

@Component({
  selector: 'app-fb-mirror',
  templateUrl: './fb-mirror.component.html',
  styleUrls: ['./fb-mirror.component.css']
})
export class FbMirrorComponent implements OnInit {

  constructor(private fb: FacebookService) { 
    let initParams: InitParams = {  
      appId: '190229558416176',
      xfbml: true, 
      version: 'v2.8'
    };
  
    fb.init(initParams);
  }

  ngOnInit() {
  }

}

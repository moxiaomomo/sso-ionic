import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
//import { runInThisContext } from 'vm';
import {AppMinimize} from "@ionic-native/app-minimize/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[AppMinimize]
})
export class HomePage implements OnInit {
  public openid: string;

  constructor(public nav:NavController, 
    public route:ActivatedRoute, 
    private appMinimize: AppMinimize,){
  }

  ngOnInit() {
    var oid = this.route.snapshot.paramMap.get('openid');
    if (oid) {
      this.openid = oid;
    } else {
      this.openid = "未登录";
    }
  }
}
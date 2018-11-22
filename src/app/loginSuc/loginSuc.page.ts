import { Component,OnInit  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-loginSuc',
  templateUrl: 'loginSuc.page.html',
  styleUrls: ['loginSuc.page.scss']
})
export class LoginSucPage implements OnInit {
  public openid: string;
  public logouturl: string;

  constructor(private sanitizer: DomSanitizer, public route:ActivatedRoute, public platform:Platform) {
  }

  ngOnInit() {
    var oid = this.platform.getQueryParam('openid');
    // var oid = this.route.snapshot.paramMap.get('openid');
    if (oid) {
      this.openid = oid;
    } else {
      this.openid = "未登录";
    }

    this.logouturl = "http://localhost:18082/ssologout?callbackUrl=http://localhost:8100/"
  }
}

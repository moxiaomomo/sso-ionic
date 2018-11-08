import { IonicModule, Platform, NavController, NavParams, AlertController } from '@ionic/angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { Http, Headers, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AboutPage }])
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {
  // myVal: any;

  // constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,public sanitizer: DomSanitizer,public http: Http) {
    
  //   this.myVal = this.http.get('https://account.giricloud.com/m_login').forEach(response => response.text()).then(html => this.myVal = html);
  //       //this.myVal = this.http.get('https://account.giricloud.com/m_login').map(response => response.text()).subscribe(html => this.myVal = html);
  
  //     }
}

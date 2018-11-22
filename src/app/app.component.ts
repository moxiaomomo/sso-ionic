import { Component } from '@angular/core';

import { Platform, App, NavController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Subscription} from 'rxjs';
import {AppMinimize} from '@ionic-native/app-minimize/ngx';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [AppMinimize, App],
})
export class AppComponent {
  sideMenuDisabled = true;
  backButtonPressed: boolean = false; //用于判断返回键是否触发
  customBackActionSubscription: Subscription;
  url;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
        private appMinimize: AppMinimize,//可以最小化Android设备上的应用程序
        private app: App,
        public navController: NavController,//导航控制器
        public toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
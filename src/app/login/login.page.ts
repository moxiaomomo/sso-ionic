import { Component,OnInit  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  ngOnInit() {}
  
  public orbitUrl: string;
  
  constructor(private sanitizer: DomSanitizer) {
    this.orbitUrl = "http://localhost:18082/ssologin";
  }
}

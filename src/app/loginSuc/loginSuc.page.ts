import { Component,OnInit  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-loginSuc',
  templateUrl: 'loginSuc.page.html',
  styleUrls: ['loginSuc.page.scss']
})
export class LoginSucPage implements OnInit {
  ngOnInit() {}
  
  public orbitUrl: string;
  constructor(private sanitizer: DomSanitizer) {
  }
}
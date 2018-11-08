import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserPage } from './browser';

@NgModule({
  declarations: [
    BrowserPage
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: BrowserPage }])
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class BrowserPageModule {}
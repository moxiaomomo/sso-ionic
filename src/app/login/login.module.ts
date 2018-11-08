import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { SafePipe } from "./pipe/safe.pipe";

const routes: Routes = [
    {
      path: '',
      component: LoginPage
    }];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage, SafePipe],
  exports: [RouterModule]
})
export class LoginPageModule {
  
}

import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginSucPage } from './loginSuc.page';
import { SafePipe } from "./pipe/safe.pipe";

const routes: Routes = [
    {
      path: '',
      component: LoginSucPage
    }];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginSucPage, SafePipe],
  exports: [RouterModule]
})
export class LoginSucPageModule {
  
}

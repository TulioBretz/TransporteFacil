import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginPageService } from './login-page.service';
import { BrMaskerModule } from 'br-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPagePageRoutingModule } from './login-page-routing.module';

import { LoginPagePage } from './login-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    LoginPagePageRoutingModule,
  ],
  declarations: [LoginPagePage],
  providers: [LoginPageService]
})
export class LoginPagePageModule {}

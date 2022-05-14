import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegurancaPagePageRoutingModule } from './seguranca-page-routing.module';

import { SegurancaPagePage } from './seguranca-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SegurancaPagePageRoutingModule
  ],
  declarations: [SegurancaPagePage]
})
export class SegurancaPagePageModule {}

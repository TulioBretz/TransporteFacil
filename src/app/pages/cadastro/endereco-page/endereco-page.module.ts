import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoPagePageRoutingModule } from './endereco-page-routing.module';

import { EnderecoPagePage } from './endereco-page.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BrMaskerModule,
    EnderecoPagePageRoutingModule
  ],
  declarations: [EnderecoPagePage]
})
export class EnderecoPagePageModule {}

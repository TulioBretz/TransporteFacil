import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosEnderecoPageRoutingModule } from './dados-endereco-routing.module';

import { DadosEnderecoPage } from './dados-endereco.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosEnderecoPageRoutingModule,
    ReactiveFormsModule,
    IonicModule,
    BrMaskerModule,
  ],
  declarations: [DadosEnderecoPage]
})
export class DadosEnderecoPageModule {}

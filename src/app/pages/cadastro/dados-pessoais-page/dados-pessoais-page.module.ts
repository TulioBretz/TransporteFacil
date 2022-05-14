import { BrMaskerModule } from "br-mask";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPessoaisPagePageRoutingModule } from './dados-pessoais-page-routing.module';

import { DadosPessoaisPagePage } from './dados-pessoais-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BrMaskerModule,
    DadosPessoaisPagePageRoutingModule
  ],
  declarations: [DadosPessoaisPagePage]
})
export class DadosPessoaisPagePageModule {}

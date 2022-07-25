import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosVeiculoPageRoutingModule } from './dados-veiculo-routing.module';

import { DadosVeiculoPage } from './dados-veiculo.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosVeiculoPageRoutingModule,
    ReactiveFormsModule,
    IonicModule,
    BrMaskerModule,
  ],
  declarations: [DadosVeiculoPage]
})
export class DadosVeiculoPageModule {}

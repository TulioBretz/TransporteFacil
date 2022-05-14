import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroMotoristaDadosVeiculoPagePageRoutingModule } from './cadastro-motorista-dados-veiculo-page-routing.module';

import { CadastroMotoristaDadosVeiculoPagePage } from './cadastro-motorista-dados-veiculo-page.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BrMaskerModule,
    CadastroMotoristaDadosVeiculoPagePageRoutingModule
  ],
  declarations: [CadastroMotoristaDadosVeiculoPagePage]
})
export class CadastroMotoristaDadosVeiculoPagePageModule {}

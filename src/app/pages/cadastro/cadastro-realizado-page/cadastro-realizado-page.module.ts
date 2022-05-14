import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroRealizadoPagePageRoutingModule } from './cadastro-realizado-page-routing.module';

import { CadastroRealizadoPagePage } from './cadastro-realizado-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroRealizadoPagePageRoutingModule
  ],
  declarations: [CadastroRealizadoPagePage]
})
export class CadastroRealizadoPagePageModule {}

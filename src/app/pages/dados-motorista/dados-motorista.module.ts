import { DadosMotoristaService } from './dados-motorista.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosMotoristaPageRoutingModule } from './dados-motorista-routing.module';

import { DadosMotoristaPage } from './dados-motorista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosMotoristaPageRoutingModule
  ],
  declarations: [DadosMotoristaPage],
  providers: [DadosMotoristaService]
})
export class DadosMotoristaPageModule {}

import { PerfilService } from './../perfil.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosUsuarioPageRoutingModule } from './dados-usuario-routing.module';

import { DadosUsuarioPage } from './dados-usuario.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BrMaskerModule,
    DadosUsuarioPageRoutingModule
  ],
  declarations: [DadosUsuarioPage],
  providers: [PerfilService]
})
export class DadosUsuarioPageModule {}

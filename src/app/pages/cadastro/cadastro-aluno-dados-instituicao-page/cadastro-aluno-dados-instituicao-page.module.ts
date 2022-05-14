import { BrMaskerModule } from 'br-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroAlunoDadosInstituicaoPagePageRoutingModule } from './cadastro-aluno-dados-instituicao-page-routing.module';

import { CadastroAlunoDadosInstituicaoPagePage } from './cadastro-aluno-dados-instituicao-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    ReactiveFormsModule,
    CadastroAlunoDadosInstituicaoPagePageRoutingModule
  ],
  declarations: [CadastroAlunoDadosInstituicaoPagePage]
})
export class CadastroAlunoDadosInstituicaoPagePageModule {}

import { AlunosDoGrupoService } from './alunos-do-grupo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunosDoGrupoPageRoutingModule } from './alunos-do-grupo-routing.module';

import { AlunosDoGrupoPage } from './alunos-do-grupo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunosDoGrupoPageRoutingModule
  ],
  declarations: [AlunosDoGrupoPage],
  providers: [AlunosDoGrupoService]
})
export class AlunosDoGrupoPageModule {}

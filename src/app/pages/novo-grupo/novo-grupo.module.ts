import { NovoGrupoService } from './novo-grupo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoGrupoPageRoutingModule } from './novo-grupo-routing.module';

import { NovoGrupoPage } from './novo-grupo.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    ReactiveFormsModule,
    NovoGrupoPageRoutingModule
  ],
  declarations: [NovoGrupoPage],
  providers: [NovoGrupoService]
})
export class NovoGrupoPageModule {}

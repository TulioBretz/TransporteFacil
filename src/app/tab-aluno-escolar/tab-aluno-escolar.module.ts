import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabAlunoEscolarPage } from './tab-aluno-escolar.page';

import { TabAlunoEscolarPageRoutingModule } from './tab-aluno-escolar-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabAlunoEscolarPageRoutingModule
  ],
  declarations: [TabAlunoEscolarPage]
})
export class TabAlunoEscolarPageModule {}

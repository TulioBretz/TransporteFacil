import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabAlunosPageRoutingModule } from './tab-alunos-routing.module';

import { TabAlunosPage } from './tab-alunos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabAlunosPageRoutingModule
  ],
  declarations: [TabAlunosPage]
})
export class TabAlunosPageModule {}

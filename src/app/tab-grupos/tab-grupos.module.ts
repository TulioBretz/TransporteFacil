import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabGruposPageRoutingModule } from './tab-grupos-routing.module';

import { TabGruposPage } from './tab-grupos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabGruposPageRoutingModule
  ],
  declarations: [TabGruposPage]
})
export class TabGruposPageModule {}

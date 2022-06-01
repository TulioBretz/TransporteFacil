import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMotoristaCodigoPageRoutingModule } from './tab-motorista-codigo-routing.module';

import { TabMotoristaCodigoPage } from './tab-motorista-codigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMotoristaCodigoPageRoutingModule
  ],
  declarations: [TabMotoristaCodigoPage]
})
export class TabMotoristaCodigoPageModule {}

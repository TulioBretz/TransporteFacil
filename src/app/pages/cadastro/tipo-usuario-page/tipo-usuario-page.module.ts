import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoUsuarioPagePageRoutingModule } from './tipo-usuario-page-routing.module';

import { TipoUsuarioPagePage } from './tipo-usuario-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoUsuarioPagePageRoutingModule
  ],
  declarations: [TipoUsuarioPagePage]
})
export class TipoUsuarioPagePageModule {}

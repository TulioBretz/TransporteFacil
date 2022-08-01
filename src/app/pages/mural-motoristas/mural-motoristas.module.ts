import { MuralMotoristasService } from './mural-motoristas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuralMotoristasPageRoutingModule } from './mural-motoristas-routing.module';

import { MuralMotoristasPage } from './mural-motoristas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuralMotoristasPageRoutingModule
  ],
  declarations: [MuralMotoristasPage],
  providers: [MuralMotoristasService]
})
export class MuralMotoristasPageModule {}

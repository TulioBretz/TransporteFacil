import { CartaoVirtualService } from './cartao-virtual.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaoVirtualPageRoutingModule } from './cartao-virtual-routing.module';

import { CartaoVirtualPage } from './cartao-virtual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CartaoVirtualPageRoutingModule
  ],
  declarations: [CartaoVirtualPage],
  providers: [CartaoVirtualService]
})
export class CartaoVirtualPageModule {}

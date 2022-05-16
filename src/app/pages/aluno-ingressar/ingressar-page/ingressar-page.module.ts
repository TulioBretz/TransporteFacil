import { IngressarPageService } from './ingressar-page.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngressarPagePageRoutingModule } from './ingressar-page-routing.module';

import { IngressarPagePage } from './ingressar-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngressarPagePageRoutingModule
  ],
  declarations: [IngressarPagePage],
  providers: [IngressarPageService]
})
export class IngressarPagePageModule {}

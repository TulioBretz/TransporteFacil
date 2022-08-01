import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaoVirtualPage } from './cartao-virtual.page';

const routes: Routes = [
  {
    path: '',
    component: CartaoVirtualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaoVirtualPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegurancaPagePage } from './seguranca-page.page';

const routes: Routes = [
  {
    path: '',
    component: SegurancaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegurancaPagePageRoutingModule {}

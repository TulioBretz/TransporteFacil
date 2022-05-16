import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngressarPagePage } from './ingressar-page.page';

const routes: Routes = [
  {
    path: '',
    component: IngressarPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngressarPagePageRoutingModule {}

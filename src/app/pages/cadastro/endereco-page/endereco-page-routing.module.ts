import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnderecoPagePage } from './endereco-page.page';

const routes: Routes = [
  {
    path: '',
    component: EnderecoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnderecoPagePageRoutingModule {}

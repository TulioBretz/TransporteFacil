import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosEnderecoPage } from './dados-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: DadosEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosEnderecoPageRoutingModule {}

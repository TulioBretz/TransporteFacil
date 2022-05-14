import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosPessoaisPagePage } from './dados-pessoais-page.page';

const routes: Routes = [
  {
    path: '',
    component: DadosPessoaisPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosPessoaisPagePageRoutingModule {}

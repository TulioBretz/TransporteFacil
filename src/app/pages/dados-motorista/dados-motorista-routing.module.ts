import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosMotoristaPage } from './dados-motorista.page';

const routes: Routes = [
  {
    path: '',
    component: DadosMotoristaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosMotoristaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosVeiculoPage } from './dados-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: DadosVeiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosVeiculoPageRoutingModule {}

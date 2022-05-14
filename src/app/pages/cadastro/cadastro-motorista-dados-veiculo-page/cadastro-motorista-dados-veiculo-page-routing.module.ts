import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroMotoristaDadosVeiculoPagePage } from './cadastro-motorista-dados-veiculo-page.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroMotoristaDadosVeiculoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroMotoristaDadosVeiculoPagePageRoutingModule {}

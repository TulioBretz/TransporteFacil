import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroRealizadoPagePage } from './cadastro-realizado-page.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroRealizadoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRealizadoPagePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuralMotoristasPage } from './mural-motoristas.page';

const routes: Routes = [
  {
    path: '',
    component: MuralMotoristasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuralMotoristasPageRoutingModule {}

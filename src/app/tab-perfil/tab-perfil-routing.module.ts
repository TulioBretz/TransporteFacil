import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPerfilPage } from './tab-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: TabPerfilPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilPageRoutingModule {}

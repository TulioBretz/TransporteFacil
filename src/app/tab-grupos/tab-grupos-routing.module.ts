import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabGruposPage } from './tab-grupos.page';

const routes: Routes = [
  {
    path: '',
    component: TabGruposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabGruposPageRoutingModule {}

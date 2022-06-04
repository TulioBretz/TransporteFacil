import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabAlunoEscolarPage } from './tab-aluno-escolar.page';

const routes: Routes = [
  {
    path: '',
    component: TabAlunoEscolarPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabAlunoEscolarPageRoutingModule {}

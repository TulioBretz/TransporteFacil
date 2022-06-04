import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-aluno-escolar',
        loadChildren: () => import('../tab-aluno-escolar/tab-aluno-escolar.module').then(m => m.TabAlunoEscolarPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab-perfil',
        loadChildren: () => import('../tab-perfil/tab-perfil.module').then(m => m.TabPerfilPageModule)
      },
      {
        path: 'tab-motorista-codigo',
        loadChildren: () => import('../tab-motorista-codigo/tab-motorista-codigo.module').then(m => m.TabMotoristaCodigoPageModule)
      },
      {
        path: 'tab-grupos',
        loadChildren: () => import('../tab-grupos/tab-grupos.module').then(m => m.TabGruposPageModule)
      },
      {
        path: 'tab-alunos',
        loadChildren: () => import('../tab-alunos/tab-alunos.module').then(m => m.TabAlunosPageModule)
      },
      {
        path: '',
        component: TabsPage,
      }
    ]
  },
  {
    path: '',
    component: TabsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

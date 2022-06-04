import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./pages/login/login-page.module').then(m => m.LoginPagePageModule)
  },
  {
    path: 'dados-pessoais-page',
    loadChildren: () => import('./pages/cadastro/dados-pessoais-page/dados-pessoais-page.module').then(m => m.DadosPessoaisPagePageModule)
  },
  {
    path: 'endereco-page',
    loadChildren: () => import('./pages/cadastro/endereco-page/endereco-page.module').then(m => m.EnderecoPagePageModule)
  },
  {
    path: 'tipo-usuario-page',
    loadChildren: () => import('./pages/cadastro/tipo-usuario-page/tipo-usuario-page.module').then(m => m.TipoUsuarioPagePageModule)
  },
  {
    path: 'cadastro-motorista-dados-veiculo-page',
    loadChildren: () => import('./pages/cadastro/cadastro-motorista-dados-veiculo-page/cadastro-motorista-dados-veiculo-page.module').then(m => m.CadastroMotoristaDadosVeiculoPagePageModule)
  },
  {
    path: 'cadastro-aluno-dados-instituicao-page',
    loadChildren: () => import('./pages/cadastro/cadastro-aluno-dados-instituicao-page/cadastro-aluno-dados-instituicao-page.module').then(m => m.CadastroAlunoDadosInstituicaoPagePageModule)
  },
  {
    path: 'seguranca-page',
    loadChildren: () => import('./pages/cadastro/seguranca-page/seguranca-page.module').then(m => m.SegurancaPagePageModule)
  },
  {
    path: 'cadastro-realizado-page',
    loadChildren: () => import('./pages/cadastro/cadastro-realizado-page/cadastro-realizado-page.module').then(m => m.CadastroRealizadoPagePageModule)
  },
  {
    path: 'ingressar-page',
    loadChildren: () => import('./pages/aluno-ingressar/ingressar-page/ingressar-page.module').then(m => m.IngressarPagePageModule)
  },
  {
    path: 'dados-usuario',
    loadChildren: () => import('./pages/perfil/dados-usuario/dados-usuario.module').then(m => m.DadosUsuarioPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

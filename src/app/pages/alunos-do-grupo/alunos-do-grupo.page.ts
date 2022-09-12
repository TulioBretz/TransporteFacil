import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { RequestsService } from './../../compartilhado/services/requests.service';
import { AlunosSelecaoModel } from 'src/app/compartilhado/models/AlunosSelecaoModel';
import { AlunosGrupoModel } from './../../compartilhado/models/AlunosGrupoModel';
import { AlunosDoGrupoService } from './alunos-do-grupo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimularLifecycle } from 'src/app/compartilhado/components/simular-lifecycle.component';

@Component({
  selector: 'app-alunos-do-grupo',
  templateUrl: './alunos-do-grupo.page.html',
  styleUrls: ['./alunos-do-grupo.page.scss'],
})
export class AlunosDoGrupoPage extends SimularLifecycle implements OnInit {

  alunosList = [new AlunosSelecaoModel()];
  grupoId: string;

  constructor(private route: ActivatedRoute,
    private router: Router, private service: AlunosDoGrupoService, private requestsService: RequestsService,
    private navCtrl: NavController) {
    super(router, route);

    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras?.state) {
        const navParams = this.router.getCurrentNavigation().extras.state;
        this.grupoId = navParams.grupoId;
      }
    });
  }

  ngOnInit() {
  }

  onEnter(): void {
    this.service.obterAlunosGrupo(this.grupoId).subscribe((resposta: any) => {

      resposta.forEach(element => {
        const novoAluno = new AlunosSelecaoModel();
        novoAluno.alunoId = element.alunoId;
        novoAluno.alunoInstituicao = element.alunoInstituicao;
        novoAluno.alunoNome = element.alunoNome;
        novoAluno.marcado = true;
        this.alunosList.push(novoAluno);
      });

      if (!this.alunosList[0].alunoId) {
        this.alunosList.splice(0, 1);
      }
    });
  }

  onSalvar() {

    let alunosDesmarcados = [new AlunosSelecaoModel()];
    alunosDesmarcados = this.alunosList.filter(x => !x.marcado);

    alunosDesmarcados.forEach(element => {
      this.service.removerAlunos(element.alunoId, this.grupoId).subscribe((resposta: any) => {
        if (resposta) {
          this.requestsService.presentToastPositivoTop('Grupo atualizado com sucesso');
          this.navCtrl.navigateRoot('tabs/tab-grupos');
        }
      });
    });
  }
}

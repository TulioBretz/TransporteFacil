import { AlunosGrupoModel } from './../../compartilhado/models/AlunosGrupoModel';
import { NavController } from '@ionic/angular';
import { GrupoModel } from './../../compartilhado/models/GrupoModel';
import { NovoGrupoService } from './novo-grupo.service';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorMessageEnum } from 'src/app/compartilhado/enums/error-message-enum';
import { AlunosSelecaoModel } from 'src/app/compartilhado/models/AlunosSelecaoModel';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-novo-grupo',
  templateUrl: './novo-grupo.page.html',
  styleUrls: ['./novo-grupo.page.scss'],
})
export class NovoGrupoPage implements OnInit {

  novoGrupoForm = this.fb.group({
    titulo: ['ddd'],
    descricao: ['ddd'],
    horarioDe: ['11:00'],
    horarioAte: ['15:00']
  });

  horarioDeValido = true;
  horarioAteValido = true;
  validationText = '';

  alunosIngressadosList = [new AlunosSelecaoModel()];

  constructor(private fb: FormBuilder, private requestsService: RequestsService, private service: NovoGrupoService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.requestsService.alunosIngressadosList.forEach(element => {

      const dadosAluno = new AlunosSelecaoModel();
      dadosAluno.alunoId = element.id;
      dadosAluno.alunoInstituicao = element.instituicao;
      dadosAluno.marcado = false;
      dadosAluno.alunoNome = element.nome;

      this.alunosIngressadosList.push(dadosAluno);
    });

    if (!this.alunosIngressadosList[0].alunoId && this.alunosIngressadosList.length > 1) {
      this.alunosIngressadosList.shift();
    }
  }

  horarioDeChange() {
    if (this.novoGrupoForm.get('horarioDe').value.length > 0 && this.novoGrupoForm.get('horarioDe').value.length < 5) {
      this.novoGrupoForm.get('horarioDe').setValue(this.novoGrupoForm.get('horarioDe').value.padEnd(5, '0'));
    }

    this.horarioDeValido = this.validarHorario(this.novoGrupoForm.get('horarioDe').value);
  }

  horarioAteChange() {
    if (this.novoGrupoForm.get('horarioAte').value.length > 0 && this.novoGrupoForm.get('horarioAte').value.length < 5) {
      this.novoGrupoForm.get('horarioAte').setValue(this.novoGrupoForm.get('horarioAte').value.padEnd(5, '0'));
    }

    this.horarioAteValido = this.validarHorario(this.novoGrupoForm.get('horarioAte').value);
  }

  validarHorario(horario: string): boolean {
    const horarioSplited = horario.split(':');

    if (+horarioSplited[0] < 0 || +horarioSplited[0] > 23 || +horarioSplited[1] < 0 || +horarioSplited[1] > 59) {
      return false;
    }

    return true;
  }

  validarHorarioMaiorQueAnterior(horarioDe: string, horarioAte: string): boolean {
    const horarioDeSemFormatacao = +horarioDe.replace(':', '');
    const horarioAteSemFormatacao = +horarioAte.replace(':', '');

    if (horarioDeSemFormatacao >= horarioAteSemFormatacao) {
      return false;
    }

    return true;
  }

  onSalvar() {
    this.novoGrupoForm.get('titulo').setValidators([Validators.required, Validators.minLength(1)]);
    this.novoGrupoForm.get('titulo').updateValueAndValidity();

    if (!this.novoGrupoForm.valid) {
      this.validationText = ErrorMessageEnum.camposObrigatorios;
      return;
    }

    if (!this.horarioDeValido || !this.horarioAteValido || !this.novoGrupoForm.get('horarioDe').value
      || !this.novoGrupoForm.get('horarioAte').value) {
      this.validationText = ErrorMessageEnum.horariosPreenchimentoIncorreto;
      return;
    }

    if (!this.validarHorarioMaiorQueAnterior(this.novoGrupoForm.get('horarioDe').value, this.novoGrupoForm.get('horarioAte').value)) {
      this.validationText = ErrorMessageEnum.horariosFinalMaiorQueInicial;
      return;
    }

    const novoGrupo = new GrupoModel();
    novoGrupo.id = Guid.create().toString();
    novoGrupo.codigoMotorista = this.requestsService.dadosUsuarioLogado.codigoMotorista;
    novoGrupo.titulo = this.novoGrupoForm.get('titulo').value;
    novoGrupo.descricao = this.novoGrupoForm.get('descricao').value;
    novoGrupo.horarioDe = this.novoGrupoForm.get('horarioDe').value;
    novoGrupo.horarioAte = this.novoGrupoForm.get('horarioAte').value;

    let alunosSelecionados = [new AlunosSelecaoModel()];
    alunosSelecionados = this.alunosIngressadosList.filter(x => x.marcado);

    alunosSelecionados.forEach(element => {
      const novoAlunoGrupo = new AlunosGrupoModel();
      novoAlunoGrupo.alunoId = element.alunoId;
      novoAlunoGrupo.alunoNome = element.alunoNome;
      novoAlunoGrupo.alunoInstituicao = element.alunoInstituicao;
      novoAlunoGrupo.grupoId = novoGrupo.id;

      novoGrupo.alunosGrupo.push(novoAlunoGrupo);
    });

    if (!novoGrupo.alunosGrupo[0].alunoId) {
      novoGrupo.alunosGrupo.splice(0, 1);
    }

    //novoGrupo.alunoId = (this.alunosIngressadosList.find(x => x.marcado).alunoId);

    {
      this.service.criarNovoGrupo(novoGrupo).subscribe((resposta: any) => {
        if (resposta) {
          this.requestsService.presentToastPositivoTop('Grupo criado com sucesso.');
          this.navCtrl.navigateRoot('tabs/tab-grupos');
        }
      });
    }
  }

  onCancelar() {
    const modalNovoAluno = document.querySelector('ion-modal');
    modalNovoAluno.dismiss(null, 'cancel');
  }

  onConfirmar() {
    const modalNovoAluno = document.querySelector('ion-modal');
    modalNovoAluno.dismiss(null, 'confirm');
  }
}

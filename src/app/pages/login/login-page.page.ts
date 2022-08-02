/* eslint-disable max-len */
import { ErrorMessageEnum } from 'src/app/compartilhado/enums/error-message-enum';
import { LoginPageService } from './login-page.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { CadastroService } from '../cadastro/cadastro.service';
import { GlobalService } from 'src/app/compartilhado/services/global.service';
import { TipoUsuarioEnum } from 'src/app/compartilhado/enums/tipo-usuario-enum';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  cadastroForm = this.fb.group({
    cpf: ['11248651600'],
    senha: ['123'],
  });

  constructor(public navCtrl: NavController, private fb: FormBuilder, private loginService: LoginPageService,
    private requestsService: RequestsService, private alertController: AlertController) { }

  ngOnInit() {


  }

  onCadastrar() {
    this.navCtrl.navigateForward('dados-pessoais-page');
  }

  onEntrar() {
    if (!this.cadastroForm.get('cpf').value || !this.cadastroForm.get('senha').value) {
      this.requestsService.presentAlert('Falha ao logar', '', 'CPF ou Senha incorretos');
      return;
    }

    this.loginService.efetuarLogin(this.cadastroForm.get('cpf').value, this.cadastroForm.get('senha').value).subscribe(resposta => {
      if (resposta && resposta.length === 0) {
        this.requestsService.presentToastTop('Dados de acesso inválidos');
        return;
      }
      else if (resposta && resposta.length > 0) {
        this.requestsService.dadosUsuarioLogado = resposta[0];
        this.requestsService.primeiroAcesso = true;

        if (this.requestsService.dadosUsuarioLogado.codigoMotorista) {
          this.requestsService.obterListaAlunosIngressadosPorCodigo(this.requestsService.dadosUsuarioLogado.codigoMotorista).subscribe((respostaAlunos: any) => {
            if (respostaAlunos && respostaAlunos.length === 0) {
              return;
            }

            this.requestsService.alunosIngressadosList = respostaAlunos;
          });
        }

        this.navCtrl.navigateRoot('');
      }
    });
  }
}

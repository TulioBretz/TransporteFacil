import { ErrorMessageEnum } from 'src/app/compartilhado/enums/error-message-enum';
import { LoginPageService } from './login-page.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  cadastroForm = this.fb.group({
    cpf: [''],
    senha: [''],
  });

  constructor(public navCtrl: NavController, private fb: FormBuilder, private loginService: LoginPageService,
    private requestsService: RequestsService, private alertController: AlertController) { }

  ngOnInit() {
  }

  onCadastrar() {
    this.navCtrl.navigateForward('dados-pessoais-page');
  }

  onEntrar() {
    // if (!this.cadastroForm.get('cpf').value || !this.cadastroForm.get('senha').value) {
    //   this.requestsService.presentAlert('Falha ao logar', '', 'CPF ou Senha incorretos');
    //   return;
    // }

    // this.loginService.efetuarLogin(this.cadastroForm.get('cpf').value, this.cadastroForm.get('senha').value).subscribe(resposta => {
    //   this.navCtrl.navigateRoot('');
    // });

    this.navCtrl.navigateRoot('');

  }
}

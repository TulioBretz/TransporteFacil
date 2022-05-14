import { LoginPageService } from './login-page.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  cadastroForm = this.fb.group({
    nomeCompleto: [''],
    cpf: [''],
    email: [''],
    confirmarEmail: [''],
    telefone: ['']
  });

  constructor(public navCtrl: NavController, private fb: FormBuilder, private loginService: LoginPageService) { }

  ngOnInit() {
  }

  onCadastrar() {
    this.navCtrl.navigateForward('dados-pessoais-page');
  }

  onEntrar() {
    this.navCtrl.navigateForward('');
  }
}

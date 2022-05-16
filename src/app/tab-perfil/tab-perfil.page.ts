import { NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-perfil',
  templateUrl: 'tab-perfil.page.html',
  styleUrls: ['tab-perfil.page.scss']
})
export class TabPerfilPage {

  cadastroForm = this.fb.group({
    nomeCompleto: [''],
    cpf: [''],
    email: [''],
    confirmarEmail: [''],
    telefone: ['']
  });

  constructor(private fb: FormBuilder, private navCtrl: NavController) {}

  onSair() {
    this.navCtrl.navigateRoot('login-page');
  }
}

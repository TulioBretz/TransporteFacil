import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-perfil',
  templateUrl: 'tab-perfil.page.html',
  styleUrls: ['tab-perfil.page.scss']
})
export class TabPerfilPage implements OnInit {


  constructor(private fb: FormBuilder, private navCtrl: NavController, private requestsService: RequestsService) { }

  ngOnInit(): void {
  }

  onSair() {
    this.navCtrl.navigateRoot('login-page');
  }

  onMeusDadosClick() {
    this.navCtrl.navigateForward('dados-usuario');
  }

  onDadosVeiculo() {
    this.navCtrl.navigateForward('dados-veiculo');
  }

  onDadosEnderecoClick() {
    this.navCtrl.navigateForward('dados-endereco');
  }

  onAlterarSenha() {
    this.navCtrl.navigateForward('alterar-senha');
  }

  onCartaoVirtual() {
    this.navCtrl.navigateForward('cartao-virtual');
  }
}

import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tipo-usuario-page',
  templateUrl: './tipo-usuario-page.page.html',
  styleUrls: ['./tipo-usuario-page.page.scss'],
})
export class TipoUsuarioPagePage implements OnInit {

  constructor(private navCtrl: NavController, private cadastroService: CadastroService) { }

  ngOnInit() {
  }

  onSouMotorista() {
    this.navCtrl.navigateForward('cadastro-motorista-dados-veiculo-page');
  }

  onSouAluno() {
    this.navCtrl.navigateForward('cadastro-aluno-dados-instituicao-page');
  }

}

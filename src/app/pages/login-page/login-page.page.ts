import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  onCadastrar() {
    this.navCtrl.navigateForward('dados-pessoais-page');
  }
}

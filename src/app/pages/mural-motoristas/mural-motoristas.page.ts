import { MuralMotoristasModel } from 'src/app/compartilhado/models/MuralMotoristasModel';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { Component, OnInit } from '@angular/core';
import { MuralMotoristasService } from './mural-motoristas.service';

@Component({
  selector: 'app-mural-motoristas',
  templateUrl: './mural-motoristas.page.html',
  styleUrls: ['./mural-motoristas.page.scss'],
})
export class MuralMotoristasPage implements OnInit {

  muralMotoristasList: MuralMotoristasModel[];

  constructor(private service: MuralMotoristasService, private requestsService: RequestsService) { }

  ngOnInit() {
    this.requestsService.obterMuralMotoristas().subscribe(resposta => {
      if (resposta) {
        this.muralMotoristasList = resposta;
      }
    });
  }
}

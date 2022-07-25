import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-veiculo',
  templateUrl: './dados-veiculo.page.html',
  styleUrls: ['./dados-veiculo.page.scss'],
})
export class DadosVeiculoPage implements OnInit {

  cadastroForm = this.fb.group({
    placa: [{ value: '', disabled: true }],
    cor: [{ value: '', disabled: true }],
    tipoVeiculo: [{ value: '', disabled: true }]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

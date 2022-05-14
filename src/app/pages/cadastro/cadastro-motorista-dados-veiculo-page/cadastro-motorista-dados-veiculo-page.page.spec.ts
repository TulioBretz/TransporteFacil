import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroMotoristaDadosVeiculoPagePage } from './cadastro-motorista-dados-veiculo-page.page';

describe('CadastroMotoristaDadosVeiculoPagePage', () => {
  let component: CadastroMotoristaDadosVeiculoPagePage;
  let fixture: ComponentFixture<CadastroMotoristaDadosVeiculoPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMotoristaDadosVeiculoPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroMotoristaDadosVeiculoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

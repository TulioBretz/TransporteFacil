import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroAlunoDadosInstituicaoPagePage } from './cadastro-aluno-dados-instituicao-page.page';

describe('CadastroAlunoDadosInstituicaoPagePage', () => {
  let component: CadastroAlunoDadosInstituicaoPagePage;
  let fixture: ComponentFixture<CadastroAlunoDadosInstituicaoPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAlunoDadosInstituicaoPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroAlunoDadosInstituicaoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { RequestsService } from './compartilhado/services/requests.service';
import { GlobalService } from 'src/app/compartilhado/services/global.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrMaskerModule } from 'br-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CadastroService } from './pages/cadastro/cadastro.service';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { LoadingModalComponent } from './compartilhado/components/loading-modal/loading-modal.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot( { backButtonText: '' }), AppRoutingModule, FontAwesomeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, GlobalService, RequestsService,
    CadastroService, { provide: HTTP_INTERCEPTORS, useClass: LoadingModalComponent, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(library: FaIconLibrary) {
		library.addIconPacks(fas, fab, far);
	}

}

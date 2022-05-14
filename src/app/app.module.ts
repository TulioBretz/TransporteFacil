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

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot( { backButtonText: '' }), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, GlobalService, RequestsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

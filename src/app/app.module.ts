import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha';
import {registerLocaleData}from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import locales from '@angular/common/locales/es-CO';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPrintModule} from 'ngx-print';
registerLocaleData(locales);

import { AppComponent } from './app.component';
import { LogoComponent } from './components/shared/logo/logo.component';
import { DatosComponent } from './components/consulta/datos/datos.component';
import {APP_ROUTING} from './app.routes';
//Servicio

import {PilaServices } from './services/InformationPila.services';
import { RecaptchaComponent } from './components/consulta/recaptcha/recaptcha.component';
import { DatosplanillaComponent } from './components/consulta/datosplanilla/datosplanilla.component';
import { LogoOccidenteComponent } from './components/shared/logo/logo-occidente/logo-occidente.component';
import { ErrorComponent } from './components/consulta/datosplanilla/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    DatosComponent,
    RecaptchaComponent,
    DatosplanillaComponent,
    LogoOccidenteComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING,
    NgxPrintModule
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Le_1NoUAAAAAMz2LGBTb-EAlMpTE0c6JNsw_5DR' },ReCaptchaV3Service,
    PilaServices, {provide: LOCALE_ID, useValue: 'es-Co'},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha';
import {registerLocaleData}from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import locales from '@angular/common/locales/es-CO';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(locales);

import { AppComponent } from './app.component';
import { LogoComponent } from './components/shared/logo/logo.component';
import { DatosComponent } from './components/consulta/datos/datos.component';
import { ButtomsubmitComponent } from './components/footer/buttomsubmit/buttomsubmit.component';

//Servicio

import {PilaServices } from './services/InformationPila.services';
import { RecaptchaComponent } from './components/consulta/recaptcha/recaptcha.component';
import { DatosplanillaComponent } from './components/consulta/datosplanilla/datosplanilla.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    DatosComponent,
    ButtomsubmitComponent,
    RecaptchaComponent,
    DatosplanillaComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Le_1NoUAAAAAMz2LGBTb-EAlMpTE0c6JNsw_5DR' },ReCaptchaV3Service,
    PilaServices, {provide: LOCALE_ID, useValue: 'es-Co'},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

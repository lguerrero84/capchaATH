import { Component, OnInit , Output, EventEmitter , ElementRef, ViewChild, Input} from '@angular/core';
import { StatusModel } from '../../../model/status.model';
import { FormControl, Validators, FormBuilder} from '@angular/forms';
import {PilaServices} from '../../../services/InformationPila.services';
import {FormPilaRq} from '../../../model/fromPilaRq';
import { PilaInformationModel } from '../../../model/PilaInformation.model';




declare var grecaptcha: any;
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  @ViewChild('recaptcha', {static: false }) recaptchaElement: ElementRef;
  @Input()conplanOccidente: boolean;

  errormsg: string;
  input: FormPilaRq = new FormPilaRq();
  repuesta: StatusModel = new StatusModel();
  infoPlanilla: PilaInformationModel = new PilaInformationModel();
  infoPila: boolean;
  infoform: boolean=true;
  errorPila: boolean;
  public date=new Date();
  

  
  

  forma: FormControl;

  constructor( private planillaPila: PilaServices, private fb: FormBuilder) {
     
      this.crearFormulario();
      this.input.bankId = '00010524',
      this.input.channel = '15',
      this.input.clientDt = new Date().toString() ,
      this.input.rqUID = '1111'
     
   }

   crearFormulario() {
     this.forma = new FormControl('', [Validators.required, Validators.maxLength(10)]);
     
   }

  ngOnInit() {
    this.addRecaptchaScript();
  }

  executeImportantAction()  {
    console.log('prueba servicio');
    console.log(this.date);
    console.log(this.forma);
    this.input.billNumber = this.forma.value;
    const response = grecaptcha.getResponse();
    if (response.length === 0) {
    this.errormsg = 'Recaptcha not verified. Please try again!';
    console.log('Debe seleccionar el captcha')
    return;
    } else {
          this.planillaPila.getInformationPila(this.input)
          .subscribe( (data: any) => {
            console.log(data);
            this.repuesta.RQUid = data.rquid;
            this.repuesta.StatusCode = data.mstatus.statusCode;
            this.repuesta.ServerStatus = data.mstatus.serverStatusCode;
            this.repuesta.Severity = data.mstatus.severity;
            this.repuesta.StatusDesc = data.mstatus.statusDesc;
            this.repuesta.InvoiceNum = data.invoiceNum;
            this.repuesta.NIE = data.nie;
            if(data.mPayInformation!=null)
            {
              this.infoPlanilla.fechaCorte = data.mPayInformation.fechaCorte;
              this.infoPlanilla.fechaRadicacion = data.mPayInformation.fechaRadicacion;
              this.infoPlanilla.fechaVencimiento = data.mPayInformation.fechaVencimiento;
              this.infoPlanilla.fechaPagoOportuno = data.mPayInformation.fechaPagoOportuno;
              this.infoPlanilla.convenio = data.mPayInformation.convenio;
              this.infoPlanilla.amount = data.mPayInformation.valor;
              this.infoPlanilla.amountType = data.mPayInformation.tipoValor;
              this.infoPlanilla.status = data.mPayInformation.estado;
              this.infoPlanilla.name = data.name;
              this.infoPlanilla.planilla = data.invoiceNum;
              this.repuesta.planilla = this.infoPlanilla;
            }
            
            if ( this.repuesta.Severity === "INFO" && this.infoPlanilla != null)
            {
              this.infoPila = true;
            } else{
              this.errorPila = true;
            }

          });
          
       
       

   }
 }

  goToUrl(): void {
    
    if(!this.conplanOccidente)
    {
      window.location.assign('https://www.avvillas.com.co/');
    }else{
      window.location.assign('https://www.bancodeoccidente.com.co/');
    }
    
}

goToHome():void{
 window.location.reload();
}

renderReCaptch() {

    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6LePbq4UAAAAAPqwJU8u5g1Of1TIEMyoPpJQpyaD',
      'callback': (response) => {
          console.log(response);
      }
    });
  

}

addRecaptchaScript() {

  window['grecaptchaCallback'] = () => {
    this.renderReCaptch();
  }

  (function(d, s, id, obj){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { obj.renderReCaptch(); return;}
    js = d.createElement(s); js.id = id;
    js.src = "http://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'recaptcha-jssdk', this));

}

}

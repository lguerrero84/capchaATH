import { Component, OnInit , Input } from '@angular/core';
import { PilaInformationModel } from 'src/app/model/PilaInformation.model';

@Component({
  selector: 'app-datosplanilla',
  templateUrl: './datosplanilla.component.html',
  styleUrls: ['./datosplanilla.component.css']
})
export class DatosplanillaComponent implements OnInit {
  public date = new Date();
  
  @Input() infoplanilla: PilaInformationModel = new PilaInformationModel();
  constructor() { }

  ngOnInit() {
  }

}

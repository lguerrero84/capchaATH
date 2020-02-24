import { Injectable } from '@angular/core';
import { StatusModel } from '../model/status.model';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { FormPilaRq } from '../model/fromPilaRq';
import { map} from 'rxjs/operators';

@Injectable()
export class PilaServices {
   
    statusModel: StatusModel = new StatusModel();
   

    constructor( private http: HttpClient){
        
    }

    getInformationPila (input:FormPilaRq){
        console.log('llego a consumir');
            // tslint:disable-next-line: align
         return  this.http.post(`/conplanServices/getInformationPILA`, input );
    }

}
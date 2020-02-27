import { Injectable } from '@angular/core';
import { StatusModel } from '../model/status.model';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { FormPilaRq } from '../model/fromPilaRq';


@Injectable()
export class PilaServices {

    statusModel: StatusModel = new StatusModel();

    constructor( private http: HttpClient) { }

    getInformationPila( input: FormPilaRq){
            // tslint:disable-next-line: align
         return  this.http.post(`http://localhost:9090/conplanServices/getInformationPILA`, input );
    }
}
import { PilaInformationModel } from './PilaInformation.model';

export class StatusModel {
    StatusCode: string;
    ServerStatus: string;
    Severity: string;
    StatusDesc: string;
    RQUid: string;
    InvoiceNum: string;
    NIE: string;
    planilla:PilaInformationModel;

}
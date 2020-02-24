import {RouterModule, Routes} from '@angular/router';
import {DatosComponent} from './components/consulta/datos/datos.component';
import { LogoOccidenteComponent } from './components/shared/logo/logo-occidente/logo-occidente.component';
import { LogoComponent } from './components/shared/logo/logo.component';

const APP_ROUTES: Routes = [
    {path: 'CONPLAN', component: LogoComponent},
    {path: 'CONPLANOCC', component: LogoOccidenteComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'CONPLAN' }
];

// tslint:disable-next-line: eofline
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
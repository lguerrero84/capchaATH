import {RouterModule, Routes} from '@angular/router';
import {DatosComponent} from './components/consulta/datos/datos.component';

const APP_ROUTES: Routes = [
    {path: 'CONPLAN', component: DatosComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'CONPLAN' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
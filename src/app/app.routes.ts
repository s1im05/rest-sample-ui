import {Routes} from '@angular/router';
import {ErrorComponent} from './layout/error/error.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const errorRoutes = [
    {path: 'error', component: ErrorComponent},
    {path: 'error/:error', component: ErrorComponent},
];


export const appRoutes: Routes = [
    {path: '', redirectTo: '/widget', pathMatch: 'full'},
    {path: 'widget', component: DashboardComponent},
    {path: 'widget/:id', component: DashboardComponent},
    {path: 'create', component: DashboardComponent},
    ...errorRoutes
];

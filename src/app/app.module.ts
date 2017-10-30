import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ClarityModule} from 'clarity-angular';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';

import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout/layout.component';
import {ErrorComponent} from './layout/error/error.component';
import {LayoutCleanComponent} from './layout/layout-clean/layout-clean.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WidgetService} from './service/widget.service';
import {WidgetComponent} from './dashboard/widget/widget.component';


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        LayoutCleanComponent,
        ErrorComponent,
        DashboardComponent,
        WidgetComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        HttpModule,
        ClarityModule
    ],
    providers: [
        WidgetService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

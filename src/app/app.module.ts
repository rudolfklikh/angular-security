import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LessonsComponent} from './lessons/lessons.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {routesConfig} from "./routes.config";
import {LessonsService} from "./services/lessons.service";
import {ReactiveFormsModule} from "@angular/forms";

import {AuthService} from "./services/auth.service";
import {AdminComponent} from './admin/admin.component';
import {Router, RouterModule} from "@angular/router";










import {RbacAllowDirective} from "./common/rbac-allow.directive";
import {AuthorizationGuard} from "./services/authorization.guard";



@NgModule({
    declarations: [
        AppComponent,
        LessonsComponent,
        LoginComponent,
        SignupComponent,
        AdminComponent,
        RbacAllowDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routesConfig),
        ReactiveFormsModule
    ],
    providers: [
        LessonsService,
        // {
        //     provide: 'adminsOnlyGuard',
        //     useFactory: createAdminOnlyGuard,
        //     deps: [
        //         AuthService,
        //         Router
        //     ]

        // }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

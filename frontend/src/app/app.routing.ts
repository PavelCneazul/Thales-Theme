import {RouterModule, Routes} from "@angular/router";
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';


const APP_ROUTES: Routes =[
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

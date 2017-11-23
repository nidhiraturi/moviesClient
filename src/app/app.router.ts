import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


import { AuthGuard } from './guards/auth-guard.service';
import { AdminComponent } from './admin/admin.component';

import { EmailLinkComponent } from './email-link/email-link.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieComponent } from './movie/movie.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { ImageformComponent } from './imageform/imageform.component';
export const appRoutes: Routes = [


    { path: '', component: HomeComponent },
    { path: 'sign', component: SignupComponent },
    { path: 'login', component: LoginComponent },
     { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: [{ typeUser: '1' }] },
    {path:'movie' ,component:MovieComponent},
    {path:'tvseries' ,component:TvSeriesComponent},
    { path: 'emailverify/:code', component: EmailLinkComponent },
    { path: 'welcome', component: WelcomeComponent , canActivate: [AuthGuard], data: [{ typeUser: '2' }]}

];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);



//, canActivate: [AuthGuard], data: [{ typeUser: '2' }]
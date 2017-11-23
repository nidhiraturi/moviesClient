import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { routes } from '../app/app.router';
import { SignupComponent } from './signup/signup.component';
import { RatingModule } from "ng2-rating";
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { ExampleServiceService } from './example-service.service';

import { ActivatedRoute, Params } from '@angular/router';

import { FacebookModule } from 'ng2-facebook-sdk';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './guards/auth-guard.service';
import { AuthService, AppGlobals } from 'angular2-google-login';
import { AdminComponent } from './admin/admin.component';

import { EmailLinkComponent } from './email-link/email-link.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MoviesService } from './movies.service';
import { MovieComponent } from './movie/movie.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { ImageformComponent } from './imageform/imageform.component';

@NgModule({
  declarations: [
    AppComponent,

    NavComponent,
    FooterComponent,

    HomeComponent,

    SignupComponent,
    LoginComponent,

    AdminComponent,

    EmailLinkComponent,
    WelcomeComponent,
    MovieComponent,
    TvSeriesComponent,
    ImageformComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    FacebookModule.forRoot()

  ],
  providers: [ExampleServiceService, AuthGuard, AuthService, MoviesService],
  bootstrap: [AppComponent]

})
export class AppModule { }

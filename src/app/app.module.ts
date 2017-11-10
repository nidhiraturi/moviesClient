import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { CustomerTableComponent } from './Product-Table/product-table.component';
import { SearchfilterPipe } from './Product-Table/searchfilter.pipe';
import { FormsModule } from '@angular/forms';
import {routes} from '../app/app.router';
import {SignupComponent} from './signup/signup.component';
import {RatingModule} from "ng2-rating";
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import {CustomerDetailComponent} from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import {ExampleServiceService} from './example-service.service';
import {User} from './user';
import {ActivatedRoute,Params} from '@angular/router';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ShowprofileComponent } from './showprofile/showprofile.component';
import { FacebookModule } from 'ng2-facebook-sdk';
import { FormBuilder, FormGroup, FormControl, Validators ,FormArray ,ReactiveFormsModule} from '@angular/forms';
import { CustomerBillComponent } from './customer-bill/customer-bill.component';
import {AuthGuard} from './guards/auth-guard.service';
import { AuthService, AppGlobals } from 'angular2-google-login';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { EmailLinkComponent } from './email-link/email-link.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {MoviesService} from './movies.service';
@NgModule({
  declarations: [
    AppComponent,
    CustomerTableComponent,
    NavComponent,
    FooterComponent,
    SearchfilterPipe,
    HomeComponent,
    CustomerDetailComponent,
    SignupComponent,
    LoginComponent,
    EditprofileComponent,
    ShowprofileComponent,
    CustomerBillComponent,
    AdminComponent,
    AddComponent,
    EmailLinkComponent,
    WelcomeComponent
  
    

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
  providers: [ExampleServiceService,AuthGuard,AuthService,MoviesService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

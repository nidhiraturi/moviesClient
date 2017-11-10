import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerTableComponent } from './Product-Table/product-table.component';
import { CustomerDetailComponent } from './product-detail/product-detail.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ShowprofileComponent } from './showprofile/showprofile.component';
import { CustomerBillComponent } from './customer-bill/customer-bill.component';
import {AuthGuard} from './guards/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { EmailLinkComponent } from './email-link/email-link.component';
import { WelcomeComponent } from './welcome/welcome.component';
export const appRoutes: Routes = [


    { path: '', component: HomeComponent },
    { path: 'customerdetail/:id', component: CustomerDetailComponent },
    { path: 'sign', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'productlist', component: CustomerTableComponent,canActivate: [AuthGuard], data: [{ loginStatus: '1' }]  },
    { path: 'productdetail', component: CustomerDetailComponent },
    { path: 'editprofile', component: EditprofileComponent },
    { path: 'showprofile', component: ShowprofileComponent },
    {path: 'bill', component: CustomerBillComponent },
    {path: 'admin', component: AdminComponent},
    {path: 'add', component: AddComponent},
    {path:'emailverify/:code',component:EmailLinkComponent},
    {path:'welcome',component:WelcomeComponent}

];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);



// 
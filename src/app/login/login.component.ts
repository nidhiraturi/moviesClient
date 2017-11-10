import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExampleServiceService } from '../example-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../user';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ng2-facebook-sdk';

import { AuthService, AppGlobals } from 'angular2-google-login';
declare const gapi : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
userObj:any;
  constructor(private api: ExampleServiceService,private _googleAuth: AuthService, private formBuilder: FormBuilder, private route: Router, private fb: FacebookService) {


    fb.init({
      appId: '1856062044722303',
      version: 'v2.10'
    });

    gapi.load('auth2', function () {
      gapi.auth2.init()
   });


    
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })


  }


  ngOnInit() {
    // AppGlobals.GOOGLE_CLIENT_ID = '248273179005-m34bisoltbmvj091rhsjd89hjaihd1qv.apps.googleusercontent.com'
    


  }
  setUserfb(res)
  {
this.userObj=res;
console.log(this.userObj, "setuserfb")
this.api.setUser(this.userObj)
  }
  login() {
    localStorage.setItem('loginStatus','1');
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
        this.fb.api('/me')
          .then((res: any) => {
            console.log('Got the users profile', res);
            
            this.setUserfb(res);
            // alert("Hello " + res.name);
            // console.log(this.userObj);
            // this.api.setUser(this.userObj);
            console.log("above hit")
            this.route.navigate(['welcome'])
          })
      })
      .catch(Error);
  }
// loginWithGoogle()
// {
//   this._googleAuth.authenticateUser(()=>{
    
//   });
// }

googleLogin(){

console.log("in func")
let googleAuth = gapi.auth2.getAuthInstance();
googleAuth.then(() => {
   googleAuth.signIn({scope: 'profile email'}).then(googleUser => {
      console.log(googleUser.getBasicProfile());
      this.route.navigate(['welcome'])
   });
});
}


  check() {
    console.log(this.loginForm.value)
    this.api.getCustomers(this.loginForm.value).subscribe(res => {
      console.log("in func check",res.respData.data.typeUser)
      this.api.setUser(this.loginForm.value.userName);
      if(res.respData.data.typeUser==1 && res.status==true)
      {
        this.route.navigate(['admin']);
      }
     
     else if(res.respData.data.typeUser==3 && res.status==true)
      {
        console.log("done")
        localStorage.setItem('loginStatus','1');
        this.route.navigate(['welcome']);
      }
      else
      {
        console.log("unauthorized user")
      }
      
    }
    )


  }


}


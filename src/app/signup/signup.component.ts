import { Component, OnInit,ElementRef,Renderer2,ViewChild} from '@angular/core';
import { ExampleServiceService } from '../example-service.service'
import { ActivatedRoute, Params } from '@angular/router';
import { RequestOptions,Headers } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  
 
  constructor(public _http: Http,private el : ElementRef,private api: ExampleServiceService,private formBuilder: FormBuilder, private route: Router) {

  }

  ngOnInit() {

    this.createUser()
  }
  createUser() {


    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.minLength(5), Validators.maxLength(99), Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]],
      userName: ['', [Validators.required, Validators.pattern('^[a-z0-9_-]{3,15}$')]],
      password: ['', [Validators.minLength(6), Validators.maxLength(20), Validators.required]],
      confirmPassword: ['', [Validators.minLength(6), Validators.maxLength(20), Validators.required]],
     userImage:['']
      
    })

  }
  
  

//function to register the user
  registerUser() {
   


    console.log(this.registerForm.value);
    if (!(this.registerForm.value.password === this.registerForm.value.confirmPassword)) {


      alert("passwords  do not match");
    }
    else {
      console.log(this.registerForm.value)
      this.api.createUser(this.registerForm.value).subscribe(data => {
         console.log("hello",data)
        this.route.navigate(['login'])
        alert("please verify the email")
      })
    }
  }


uploadImage()
{
  const header = new Headers({
    'Authorization': 'Bearer'+ localStorage.getItem('token')
  });
  const options = new RequestOptions({ headers:header });
  const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#userImage');
  const fileCount: number = inputEl.files.length;
  const formData = new FormData();
  if (fileCount > 0) {
    formData.append('userImage', inputEl.files.item(0));
  // let data=this.userImage.nativeElement;
  
  
  this._http.post('http://192.168.13.126:8888/api/v1/upload/image',formData, options)
  .subscribe(res => {
    console.log(res);
     
});
}
}
}
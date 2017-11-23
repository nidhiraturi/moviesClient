import { Component, OnInit } from '@angular/core';
import { ExampleServiceService } from '../example-service.service'
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-imageform',
  templateUrl: './imageform.component.html',
  styleUrls: ['./imageform.component.css']
})
export class ImageformComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private _api:ExampleServiceService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      
      yourImage: ['']
      
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {ExampleServiceService} from '../example-service.service';
import {User} from '../user';
@Component({
  selector: 'app-showprofile',
  templateUrl: './showprofile.component.html',
  styleUrls: ['./showprofile.component.css']
})
export class ShowprofileComponent implements OnInit {
allusers:any;
username:string;
name:string;
password:string;
email:string;

  constructor(private _exampleservice:ExampleServiceService) { }

  ngOnInit() {
    this.username=localStorage.getItem("uname");
  }
  
 
}

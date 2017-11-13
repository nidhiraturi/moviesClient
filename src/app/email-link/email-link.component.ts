import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router'
import {ExampleServiceService} from '../example-service.service';
@Component({
  selector: 'app-email-link',
  templateUrl: './email-link.component.html',
  styleUrls: ['./email-link.component.css']
})
export class EmailLinkComponent implements OnInit {

  constructor(public activatedroute : ActivatedRoute,public api:ExampleServiceService) { }

  ngOnInit() {
    console.log(this.activatedroute.snapshot.params.code)
    
    //api call to hit the verifed customer api
this.api.createUserFinal(this.activatedroute.snapshot.params.code).subscribe(res=>console.log(res))
    
  }

}

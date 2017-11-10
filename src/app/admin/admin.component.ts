import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  toNextComponent()
  {
     this.route.navigate(['add']);
  }
}

// exports.postseason = function (req, res) { // Function to Post the Data in Users Collection of Database
//   Seasons.find({}, function (err, response) { // Function to Find all the Users from collection 
//       if (err) {
//           return res.json(req, res, err);
//       }
//       a = response[0].season_id
//       var season = new Seasons({ // Making Object of season Schema
//           name: req.body.name,
//           season_id: a + 1,
//           series_id: req.body.series_id

//       });
//       season.save(function (err, response) { // Saving the Data into the Database
//           if (err) {
//               return res.json(req, res, err);
//           }

//           res.json({
//               success: true,
//               body: response
//           })

//       });
//   }).sort({
//       season_id: -1
//   }).limit(1);
// }
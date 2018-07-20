import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  mainHeading = 'mainHeadingBlue';
  mainHeading2 = 'mainHeadingRed';
  // Add colors on the basis of array
  // colors = [
  //   this.mainHeading, this.mainHeading2
  // ];
  
  // Add colors on the basis of object property
  // colors = {
  //   'mainHeadingBlue' : false,
  //   'mainHeadingRed' : true
  // };

  // colorRed = 'red';

  // styleDiv = {
  //   'background-color': 'black',
  //   'padding': '10px',
  //   'margin-top': '10px',
  //   'border-radius': '5px',
  //   'font-size': '18px',
  //   'color': 'aqua',
  //   'text-align': 'center'
  // };

  // defaultPlaceholder = 'Please typing something over here';
  // defaultValue = 'Vishakha';
  isShow: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate([]);
  }

  // changeBlock() {
  //   this.isShow = !this.isShow;
  // }
}

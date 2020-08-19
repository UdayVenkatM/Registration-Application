import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isShowReference: boolean = false;
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  addressFormControl = new FormControl('', [
    Validators.required,
  ]);
  mobileFormControl = new FormControl('', [
    Validators.required,
  ]);
  refererNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  refererMobileFormControl = new FormControl('', [
    Validators.required,
  ]);
  serviceTypeFormControl = new FormControl('', [
    Validators.required,
  ]);
  experienceFormControl = new FormControl('', [
    Validators.required,
  ]);
  cityFormControl = new FormControl('', [
    Validators.required,
  ]);
  serviceTypes: string[] = ["Interior Design", "Construction", "Renovation", "Painting", "Salon at Home", "Home Maintenance"];
  cities: string[] = ["Hyderabad", "Bangalore", "Mumbai", "Kolkata", "Delhi", "Chennai", "Pune"];

  constructor() { }

  ngOnInit() {
  }

  referenceClicked(event: any){
    if (event.value == '1') {
      this.isShowReference = true;
    }else{
      this.isShowReference = false;
    }
  }

}

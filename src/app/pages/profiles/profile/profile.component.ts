import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstoragedataservService } from 'src/app/services/localstoragedataserv.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
addprofile:any;
myprofiledata:any;
dataform:any;

  constructor(private local:LocalstoragedataservService,private router:Router) {
    this.dataform=JSON.parse(localStorage.getItem("profile") || "{}");
    this.addprofile = new FormGroup({
      'fname' : new FormControl(null, Validators.required),
      'lname' : new FormControl(null, Validators.required),
      'email' : new FormControl(null,[Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
      'phone' : new FormControl(null,[Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]),
    'dob' : new FormControl(null, Validators.required),
    'gender' : new FormControl(null,Validators.required),
      'city' : new FormControl(null, Validators.required),
      'country':new FormControl(null, Validators.required)
     
    });
   }

  ngOnInit(): void {
    
    
    }
 // click function to submit the form data
 onsubmit(data:any){
  
  
  this.myprofiledata={
    fname:data.value.fname,
    lname:data.value.lname,
    email:data.value.email,
    dob:data.value.dob,
    phone:data.value.phone,
    gender:data.value.gender,
    city:data.value.city,
    country:data.value.country
  }
  console.log(this.myprofiledata);
  
this.router.navigateByUrl('prof-details');
this.local.profiledata(this.myprofiledata);


}
    
  // get data
  get fname() {
    return this.addprofile.get('fname');
  }
  get lname() {
    return this.addprofile.get('lname');
  }
  get email() {
    return this.addprofile.get('email');
  }
  get dob() {
    return this.addprofile.get('dob');
  }
  get phone(){
    return this.addprofile.get('phone');
  }
  get gender(){
    return this.addprofile.get('gender');
  }
  get city() {
    return this.addprofile.get('city');
  }
  get country() {
    return this.addprofile.get('country');
  }

}

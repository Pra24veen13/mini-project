import { Injectable } from '@angular/core';
import { ApidataService } from './apidata.service';

@Injectable({
  providedIn: 'root'
})
export class LocalstoragedataservService {
newData:any;
blogsvariable:any;
getdata:any;
profdata:any
edit=-1;
updatevalue:any;
id:any;
mydata:any;
  constructor(private fetcheData: ApidataService) {
    this.storelocal();
    this.getlocal();
   }

// storing the api data in localstorage
storelocal(){ 
  this.fetcheData.apiData().subscribe(data =>
    {
      this.newData=data.articles;
      localStorage.setItem("blogdata",JSON.stringify(this.newData));
    });
}
// retrive data from localstorage(apidata)
getlocal(){
  this.getdata=JSON.parse(localStorage.getItem("blogdata")|| "{}" );
}

hasAccount(): boolean {
  if (localStorage.getItem("profile")) {
    return true;
  }
  return false;
}

formdata(data:any){
  if (this.edit == -1) {
    this.getdata.push(data);
  } else {
    this.getdata[this.edit] = data;
  }
   localStorage.setItem("blogdata",JSON.stringify(this.getdata));
  }

  editlocal(updateblog:any,id:any){
      this.updatevalue = updateblog;
      this.id = id;
      this.edit = id;    
  }
// storing profile data in local storage
profiledata(addprofile:any){
  console.log(addprofile);
  
  this.profdata=addprofile;
localStorage.setItem("profile",JSON.stringify(this.profdata));
console.log("ser",this.profdata);

}

// getting the profile data
userdataprof(){
  this.mydata=JSON.parse(localStorage.getItem('profile') || "{}");
  return this.mydata;
}

//calling the index value
  indval(index:any){
    return this.getdata[index];
  }

login(){

}


}
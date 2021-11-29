import { Injectable } from '@angular/core';
import { ApidataService } from './apidata.service';

@Injectable({
  providedIn: 'root'
})
export class LocalstoragedataservService {
newData:any;
blogsvariable:any;
getdata:any;
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

// storing the form data in local storage
formdata(allblogs:any){
  this.blogsvariable.push(allblogs);
  localStorage.setItem("blogs",JSON.stringify(this.blogsvariable));
  }

//calling the index value
  indval(index:any){
    return this.getdata[index];
  }

  // delete data
  deleteLocal(index:any){
    this.getdata.splice(index,1);
    localStorage.setItem('blogdata',JSON.stringify(this.getdata));
  }

// edit data
editlocal(){
  
}


}
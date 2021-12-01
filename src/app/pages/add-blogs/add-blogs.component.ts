import { Component, OnInit } from '@angular/core';
import { LocalstoragedataservService } from 'src/app/services/localstoragedataserv.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { DataTypeModel } from 'src/app/interface/data-type/data-type.model';


@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent implements OnInit {
updateValue:any;
datatype= new DataTypeModel();
  constructor(private local:LocalstoragedataservService) {
    this.updateValue=this.local.updatevalue;
    this.addblogs = new FormGroup({
      'title' : new FormControl(null, Validators.required),
      'author' : new FormControl(null, Validators.required),
      'content' : new FormControl(null,[Validators.required, Validators.minLength(10)]),
      'description' : new FormControl(null, [Validators.required, Validators.minLength(30)]),
      'url':new FormControl(null, Validators.required),
      'publishedAt' : new FormControl(null,Validators.required)
    });
    this.edit=this.local.edit;
    console.log(this.edit);
    var data2=this.local.getdata;
    console.log(data2);
   
    this.addblogs.patchValue(this.updateValue);
    
   }

  myVAlue:any;
  addblogs:any;
  edit:any;

  ngOnInit() {
    
 
  }

  // click function to submit the form data
onsubmit(data:any){
  this.myVAlue={
    title:data.value.title,
    author:data.value.author,
    content:data.value.content,
    description:data.value.description,
    url:data.value.url,
    publishedAt:data.value.publishedAt
  }
  console.log(this.myVAlue);
  
  this.addblogs.reset();
  this.local.formdata(this.myVAlue);
  }

  // get data
     get title() {
      return this.addblogs.get('title');
    }
    get author() {
      return this.addblogs.get('author');
    }
    get content() {
      return this.addblogs.get('content');
    }
    get url() {
      return this.addblogs.get('url');
    }
    get description() {
      return this.addblogs.get('description');
    }
    get publishedAt() {
      return this.addblogs.get('publishedAt');
    }
    }
import { Component, OnInit } from '@angular/core';
import { LocalstoragedataservService } from 'src/app/services/localstoragedataserv.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent implements OnInit {

  constructor(private local:LocalstoragedataservService) { }

  myVAlue:any;
  addblogs:any;

  ngOnInit() {
  this.addblogs = new FormGroup({
    'title' : new FormControl(null, Validators.required),
    'author' : new FormControl(null, Validators.required),
    'content' : new FormControl(null,[Validators.required, Validators.minLength(10)]),
    'desc' : new FormControl(null, [Validators.required, Validators.minLength(30)]),
    'imgurl':new FormControl(null, Validators.required),
    'published' : new FormControl(null,Validators.required)
  });
  }

  // click function to submit the form data
onsubmit(data:any){
  this.myVAlue={
    title:this.addblogs.value.title,
    author:this.addblogs.value.author,
    content:this.addblogs.value.content,
    desc:this.addblogs.value.desc,
    imgurl:this.addblogs.value.disc,
    published:this.addblogs.value.published
  }
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
    get imgurl() {
      return this.addblogs.get('imgurl');
    }
    get desc() {
      return this.addblogs.get('desc');
    }
    get published() {
      return this.addblogs.get('published');
    }
    }
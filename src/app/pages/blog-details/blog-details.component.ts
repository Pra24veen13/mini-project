import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstoragedataservService } from 'src/app/services/localstoragedataserv.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog:any;
  myurl:any;
  myid:any;
  local:any;
  print:any;

    constructor(private blogin:LocalstoragedataservService,private router:Router, private location:Location) { }
  
    ngOnInit(): void {
     this.print=this.router.url;
     this.myurl=this.print.replace("/blog-details","");
     this.blogin.getdata.forEach((value:any)=> {
       this.local=value.url;
       if(this.local==this.myurl){
         this.blog=value;
       }
     });
    }


    delete(){
      this.blogin.deleteLocal(this.print);
      this.location.back();
    }

    
}

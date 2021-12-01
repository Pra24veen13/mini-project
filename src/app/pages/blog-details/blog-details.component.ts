import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  updateval:any;
  uid:any;

    constructor(private blogin:LocalstoragedataservService,private router:Router, private location:Location, private activate:ActivatedRoute) { }
  
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
        this.blogin.getdata.forEach((value:any,index:any)=> {
        this.local=value.url;
        if(this.local==this.myurl){
          this.blog=index;
        }
      });
      this.blogin.getdata.splice(this.blog,1);
      localStorage.setItem('blogdata',JSON.stringify(this.blogin.getdata));
      this.location.back();
    }

    edit(){
  
    this.blogin.getdata.forEach((updatevalue:any,ind:any)=>{
      this.updateval=updatevalue;
      if(this.blog==this.updateval){
        this.uid=ind;
        this.blogin.editlocal(this.updateval,ind);
        this.router.navigateByUrl('Edit');
      }
  
    });
    }

    
}

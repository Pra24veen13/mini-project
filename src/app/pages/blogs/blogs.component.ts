import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstoragedataservService } from 'src/app/services/localstoragedataserv.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogsDataArr: any;
  myurl:any;

  constructor(private router:Router ,private local:LocalstoragedataservService) { }

  ngOnInit(): void {
 this.blogsDataArr=this.local.getdata;
  }

  route(blog:any){
  this.myurl=blog;
  this.router.navigateByUrl('blog-details'+this.myurl);
  }
}

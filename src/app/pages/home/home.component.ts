import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstoragedataservService } from 'src/app/services/localstoragedataserv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
blogsDataArr:any;

  constructor(private router:Router, private fetchdata:LocalstoragedataservService) { }
  ngOnInit(): void {
this.blogsDataArr=this.fetchdata.getdata;
  
}

route(){
  this.router.navigateByUrl('blog');
}
}
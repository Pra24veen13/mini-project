import { Component, OnInit } from '@angular/core';
import { LocalstoragedataservService } from 'src/app/services/localstoragedataserv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigateByUrl:any;
  userdata:any;
 
  constructor(private local:LocalstoragedataservService) { 
    this.userdata=this.local.userdataprof();
  }
  

  ngOnInit(): void {
  }
 
}

import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstoragedataservService } from 'src/app/services/localstoragedataserv.service';



@Component({
  selector: 'app-prof-details',
  templateUrl: './prof-details.component.html',
  styleUrls: ['./prof-details.component.css']
})
export class ProfDetailsComponent implements OnInit {
userdata:any;
account:any;
  constructor(private local:LocalstoragedataservService,private router:Router){ 

   
  }

  ngOnInit(): void {
    this.account = this.local.hasAccount();
     if (this.account) {
      this.userdata=this.local.userdataprof();
    }

  }

  edit(){
  this.router.navigateByUrl('profile');
  }

  }



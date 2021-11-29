import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  // storing the data from api
  url: string ="https://api.json-generator.com/templates/VUDUZd4V3QyJ/data?access_token=sdxv5aybndbk39af52pub0x8rlmyp6usm4glpoh2";


  constructor(private http: HttpClient) {}

// Fetching the data form the variable in which stored the api data 
  apiData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http:HttpClient) { }
  page=0;
  resultcount=10;
  totalpages=10;
  getData(){
    return this.http.get(`https://api.openbrewerydb.org/v1/breweries?page=${this.page}&per_page=${this.resultcount}&size=${this.totalpages}`)
  }
}

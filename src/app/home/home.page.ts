import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 sideNavStatus:boolean=false;
 myData:any;
 bulkEdit=false;
 sortDirection=0;
 sortBy(key:string)
 {

 }
  constructor(private mydataservice:MyDataService)  {}
  ngOnInit(): void {
   this.mydataservice.getData().subscribe((data)=>{
   this.myData=data;
   });
  }

}

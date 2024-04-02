import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService,MsalBroadcastService } from '@azure/msal-angular';
import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit{
 
  constructor(private msalservice:MsalService,private router:Router) {
    this.msalservice.initialize();
    let msalInstance:PublicClientApplication=this.msalservice.instance as PublicClientApplication;
    // msalInstance.clearCache();
    

    const itemKey = "msal.interaction.status";
    if (sessionStorage.getItem(itemKey))
    {
      
        sessionStorage.removeItem(itemKey);
    }
    
   
    
    
    console.log(localStorage);
    
    //this.router.navigateByUrl('home');
  }
  @ViewChild('divClick')
  divClick!: ElementRef;
  ngAfterViewInit(): void {
   
  }
  
  ngOnInit(): void {
   
    setTimeout(() => {
      this.divClick.nativeElement.click();
      }, 200);
  }
  

  
  
  isloggedin():boolean{
    return this.msalservice.instance.getActiveAccount()!=null;
  }



   login(){
    this.msalservice.loginPopup().subscribe((response:AuthenticationResult)=>{this.msalservice.instance.setActiveAccount(response.account)});
    this.router.navigateByUrl('home');
    console.log(this.msalservice.instance.getActiveAccount()?.idToken);
  }
   logout(){
     this.msalservice.logout();
  }
  
}

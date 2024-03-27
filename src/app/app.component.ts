import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  template: '<button (click)="login();">Login</button><button (click)="logout();">Logout</button><router-outlet></router-outlet>',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private msalservice:MsalService) {
    this.msalservice.initialize();
    let msalInstance:PublicClientApplication=this.msalservice.instance as PublicClientApplication;
    msalInstance.clearCache();
    
  }
  
  isloggedin():boolean{
    return this.msalservice.instance.getActiveAccount()!=null;
  }

   login(){
    this.msalservice.loginPopup().subscribe((response:AuthenticationResult)=>{this.msalservice.instance.setActiveAccount(response.account)});
    
    console.log(this.msalservice.instance.getActiveAccount());
  }
   logout(){
     this.msalservice.logout();
  }
  
}

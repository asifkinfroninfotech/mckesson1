import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService,MsalBroadcastService } from '@azure/msal-angular';
import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';



@Component({
  selector: 'app-root',
  template: '<button (click)="login();"></button><router-outlet></router-outlet>',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
   
  constructor(private msalservice:MsalService,private router:Router,private oauthService:OAuthService) {
    this.msalservice.initialize();
    let msalInstance:PublicClientApplication=this.msalservice.instance as PublicClientApplication;
    msalInstance.clearCache();
    

    const itemKey = "msal.interaction.status";
    if (sessionStorage.getItem(itemKey))
    {
      
        sessionStorage.removeItem(itemKey);
    }
    
   
    
    
    console.log(localStorage);
  }
 
ngOnInit(){
  
  this.configureSingleSignOn();
}
configureSingleSignOn(){
  let authConfig: AuthConfig = {
    issuer: 'http://login.microsoftonline.com',
    redirectUri: 'http://localhost:8100',
    clientId: 'af8bb73b-e8cb-4a3f-9e58-4ade29167b24',
    scope: 'openid',
    responseType: 'code',
    showDebugInformation: true,  
  };
  this.oauthService.configure(authConfig);
  this.oauthService.tokenValidationHandler=new JwksValidationHandler();
  this.oauthService.loadDiscoveryDocumentAndTryLogin();
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

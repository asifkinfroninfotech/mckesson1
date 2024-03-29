import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MSAL_INSTANCE, MsalService } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaslGuard{

 constructor(private msalservice:MsalService){
  this.msalservice.initialize();
  let msalInstance:PublicClientApplication=this.msalservice.instance as PublicClientApplication;
 }

   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

      //console.log(localStorage.getItem.length);
      //console.log(this.msalservice.instance.getActiveAccount()?.idToken);
     if(this.msalservice.instance.getActiveAccount()?.idToken ==null)
     {
      return false;
     }
    return true;

  }
  
}

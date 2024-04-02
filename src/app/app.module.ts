import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonCol, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserCacheLocation, IPublicClientApplication, LogLevel, PublicClientApplication } from '@azure/msal-browser';

import { MSAL_INSTANCE, MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'af8bb73b-e8cb-4a3f-9e58-4ade29167b24',
      redirectUri: 'http://localhost:8100'
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage
    },
    system: {
      allowNativeBroker: false, // Disables WAM Broker
      loggerOptions: {
        
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false
      }
    }
  });
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,OAuthModule.forRoot(),HttpClientModule,CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{
    provide: MSAL_INSTANCE,
    useFactory: MSALInstanceFactory
  },HttpClientModule,MsalBroadcastService,
MsalService,],
  bootstrap: [AppComponent],
})
export class AppModule {}

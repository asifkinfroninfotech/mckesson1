import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderPageModule } from '../header/header.module';
import { SidenavPageModule } from '../sidenav/sidenav.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderPageModule,
    SidenavPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

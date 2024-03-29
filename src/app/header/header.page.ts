import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus:boolean=false;
  constructor(private msalservice:MsalService) { }

  ngOnInit() {
  }
  SideNavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  logout(){
    this.msalservice.logout();
  }

}

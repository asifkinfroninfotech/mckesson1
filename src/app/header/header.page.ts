import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  SideNavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

}

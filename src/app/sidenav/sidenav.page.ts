import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})
export class SidenavPage implements OnInit {
@Input() sideNavStatus:boolean=false;
  list=[
    {
      number:'1',
      name:'home',
      icon:'fa-solid fa-house'
    },
    {
      number:'2',
      name:'Analytics',
      icon:'fa-chart-line'
    },
    {
      number:'3',
      name:'Products',
      icon:'box'
    },
    {
      number:'4',
      name:'Order',
      icon:'cart-shopping'
    },
    {
      number:'5',
      name:'Settings',
      icon:'gear'
    },
    {
      number:'6',
      name:'About',
      icon:'circle-info'
    },
    {
      number:'7',
      name:'Contact',
      icon:'circle-phone'
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}

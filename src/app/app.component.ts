import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private menuItems: MenuItem[];
  private miniMenuItems: MenuItem[];

  constructor() {

  }

  ngOnInit() {

    this.menuItems = [
      {label: 'Dashboard', icon: 'fa-home', routerLink: ['/']},
      {label: 'My Timesheets', icon: 'fa-calendar', routerLink: ['/']},
      {label: 'My Projects', icon: 'fa-tasks', routerLink: ['/']},
      {label: 'My Team', icon: 'fa-users', routerLink: ['/']},
      {label: 'Settings', icon: 'fa-sliders', routerLink: ['/']},
    ]

    this.miniMenuItems = [];
    this.menuItems.forEach( (item : MenuItem) => {
      let miniItem = { icon: item.icon, routerLink: item.routerLink }
      this.miniMenuItems.push(miniItem);
    })

  }


}

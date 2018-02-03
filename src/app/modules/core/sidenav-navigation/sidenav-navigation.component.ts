import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tft-sidenav-navigation',
  templateUrl: './sidenav-navigation.component.html',
  styleUrls: ['./sidenav-navigation.component.css']
})
export class SidenavNavigationComponent implements OnInit {

  @Input() links: { title: string, path: string, subtitle?: string };

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../services/layout.service'

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  show: boolean = false;
  showSideNav: boolean = false;
  showCoverageMenu: boolean = false;
  constructor(private layout: LayoutService) { }

  ngOnInit(): void {
  }

  Toggle(){
    this.show = !this.show;
    this.layout.toggelMobileMenuButtonState(this.show)
  }

  ToggleSideNav(){
    this.showSideNav = !this.showSideNav
  }

}

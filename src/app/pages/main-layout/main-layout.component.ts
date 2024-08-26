import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenavMode: MatDrawerMode = 'side';

  ngAfterViewInit() {
    setTimeout(() => {
      this.sidenav.open();
    });
  }

  menuOpen = true;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.sidenavMode = result.matches ? 'over' : 'side';
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}

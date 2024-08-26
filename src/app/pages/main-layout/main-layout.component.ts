import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  ngAfterViewInit() {
    setTimeout(() => {
      this.sidenav.open();
    });
  }

  menuOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}

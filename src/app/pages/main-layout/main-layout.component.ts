import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem } from './models/menu-item.model';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenavMode: MatDrawerMode = 'side';
  menuOpen = true;

  // Menu items list
  menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'dashboard',
      isSelected: false,
      hasSubmenu: false
    },
    {
      name: 'General',
      url: '/general',
      icon: 'check_box',
      isSelected: false,
      hasSubmenu: false
    },
    {
      name: 'Profile',
      url: '/profile',
      icon: 'person',
      isSelected: false,
      hasSubmenu: false
    },
    {
      name: 'Notification',
      url: '/notification',
      icon: 'notification_important',
      isSelected: false,
      hasSubmenu: false
    },
    {
      name: 'Preference',
      url: '',
      icon: '',
      isSelected: false,
      hasSubmenu: true,
      submenu: [
        { name: 'Billing', url: '/billing', icon: 'attach_money', isSelected: false, hasSubmenu: false },
        { name: 'Notification', url: '/notification', icon: 'notification_important', isSelected: false, hasSubmenu: false }
      ]
    },
    {
      name: 'Privacy',
      url: '',
      icon: '',
      isSelected: false,
      hasSubmenu: true,
      submenu: [
        { name: 'Partnership Request', url: '/partnership-request', icon: 'person_add', isSelected: false, hasSubmenu: false },
        { name: 'Profile Visibility', url: '/profile-visibility', icon: 'visibility', isSelected: false, hasSubmenu: false }
      ]
    }
  ];

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  ngOnInit(): void {

    this.updateMenuSelection(this.router.url);

    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.sidenavMode = result.matches ? 'over' : 'side';
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateMenuSelection(event.urlAfterRedirects);
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.sidenav.open();
    });
  }

  updateMenuSelection(currentRoute: string): void {
    this.menuItems.forEach(item => {
      item.isSelected = this.isRouteSelected(item, currentRoute);

      if (item.hasSubmenu && item.submenu) {
        item.submenu.forEach(subItem => {
          subItem.isSelected = this.isRouteSelected(subItem, currentRoute);
        });
      }
    });
  }

  private isRouteSelected(item: MenuItem, currentRoute: string): boolean {
    return item.url === currentRoute;
  }
}

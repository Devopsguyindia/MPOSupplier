import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MaterialModule } from 'src/shared/material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';



@NgModule({
  declarations: [
    PagesComponent,
    MainLayoutComponent,
    ProfileComponent,
    SampleDialogComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }

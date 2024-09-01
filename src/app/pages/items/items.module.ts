import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { NgxDatatableModule } from '@tusharghoshbd/ngx-datatable';
import { AppService } from './items-list/app.service';



@NgModule({
  declarations: [
    ItemsComponent,
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    NgxDatatableModule
  ],
  providers: [AppService]
})
export class ItemsModule { }

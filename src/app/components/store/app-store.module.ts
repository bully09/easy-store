import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InventoryComponent } from './inventory/app-inventory.component';
import { NgbTooltipModule, NgbPaginationModule, NgbModal, NgbDatepicker, NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryFormComponent } from './inventory/form/app-inventory-form.component';

@NgModule({
  declarations: [
      InventoryComponent,
      InventoryFormComponent
  ],
  imports: [
    BrowserModule,
    NgbTooltipModule,
    NgbPaginationModule,
    NgbModalModule, 
    NgbDatepickerModule
  ],
  providers: [],
  exports: [
      InventoryComponent,
      InventoryFormComponent
  ]
})
export class StoreModule { }

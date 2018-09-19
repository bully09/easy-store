import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/app-menu.component';
import { InventoryComponent } from './components/store/inventory/app-inventory.component';

const routes: Routes = [{
    path: '',
    component: MenuComponent
  }, {
    path: 'inventory',
    component: InventoryComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
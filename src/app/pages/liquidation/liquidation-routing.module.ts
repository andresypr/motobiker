import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClientComponent} from './client/client.component';
import {MaintenanceComponent} from './maintenance/maintenance.component';
import {ProductComponent} from './product/product.component';
import {FactureComponent} from './facture/facture.component';

const routes: Routes = [
  // { path: '', redirectTo: 'maintenance', pathMatch: 'full' },
  { path: 'client', component: ClientComponent },
  { path: 'product', component: ProductComponent },
  { path: 'factory', component: FactureComponent },
  { path: 'maintenance', component: MaintenanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquidationRoutingModule { }

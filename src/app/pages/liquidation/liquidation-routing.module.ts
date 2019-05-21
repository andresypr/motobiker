import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClientComponent} from './client/client.component';
import {MaintenanceComponent} from './maintenance/maintenance.component';

const routes: Routes = [
  // { path: '', redirectTo: 'maintenance', pathMatch: 'full' },
  { path: 'client', component: ClientComponent},
  { path: 'maintenance', component: MaintenanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquidationRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClientComponent} from './client/client.component';

const routes: Routes = [
  // { path: '', redirectTo: 'maintenance', pathMatch: 'full' },
  { path: 'maintenance', component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquidationRoutingModule { }

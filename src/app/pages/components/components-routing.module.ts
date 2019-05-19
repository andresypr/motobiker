import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoyuotComponent} from './loyuot/loyuot.component';

const routes: Routes = [
  {
    path: '',
    component: LoyuotComponent,
    children: [
      {path: '', redirectTo: 'liquidation', pathMatch: 'prefix'},
      {path: 'liquidation', loadChildren: '../liquidation/liquidation.module#LiquidationModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionGuard } from './providers/guards/session.guard';

export const routes: Routes = [
  /* Para estos modulos se validan si la session es valida */
  {path: '', redirectTo: 'app', pathMatch: 'full', canActivate: [SessionGuard] },
  {path: 'app', loadChildren: './pages/components/components.module#ComponentsModule', canActivate: [SessionGuard] },
  /* */
  {path: 'session', loadChildren: './pages/session/session.module#SessionModule'},
  /* Error pages */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CustomMaterialModule} from '../../custom-material.module';
import { LiquidationRoutingModule } from './liquidation-routing.module';

import {ClientComponent} from './client/client.component';

import {ClientDialog} from './client/dialog/client.dialog';
import {SnackBarComponent} from '../shared/snack-bar.component';
import {MaintenanceDialog} from './maintenance/dialog/maintenance.dialog';
import {MaintenanceComponent} from './maintenance/maintenance.component';
import {ProductComponent} from './product/product.component';
import {ProductDialog} from './product/dialog/product.dialog';
import { FactureComponent } from './facture/facture.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LiquidationRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ClientComponent,
    ClientDialog,
    SnackBarComponent,
    MaintenanceComponent,
    MaintenanceDialog,
    ProductComponent,
    ProductDialog,
    FactureComponent
  ],
  entryComponents: [
    ClientDialog,
    ProductDialog,
    SnackBarComponent,
    MaintenanceDialog,
  ]
})
export class LiquidationModule { }

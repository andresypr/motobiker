import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CustomMaterialModule} from '../../custom-material.module';
import { LiquidationRoutingModule } from './liquidation-routing.module';

import {ClientComponent} from './client/client.component';

import {ClientDialog} from './client/dialog/client.dialog';
import {SnackBarComponent} from '../shared/snack-bar.component';
import { DialogComponent } from './maintenance/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LiquidationRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ClientComponent,
    ClientDialog,
    SnackBarComponent,
    DialogComponent
  ],
  entryComponents: [
    ClientDialog,
    SnackBarComponent
  ]
})
export class LiquidationModule { }

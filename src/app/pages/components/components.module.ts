import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import {HeaderComponent} from './header/header.component';
import {CustomMaterialModule} from '../../custom-material.module';
import { LoyuotComponent } from './loyuot/loyuot.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoyuotComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    CustomMaterialModule
  ]
})
export class ComponentsModule { }

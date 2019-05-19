import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

import { SessionRoutingModule } from './session-routing.module';
import {CustomMaterialModule} from '../../custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SessionRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: []
})
export class SessionModule { }

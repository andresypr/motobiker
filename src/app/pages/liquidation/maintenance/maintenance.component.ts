import {MatSnackBar} from '@angular/material';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ClientModel} from '../../../models/client.model';

import {InitialiseUtil} from '../../../providers/utils/initialise-util';

import {LiquidationService} from '../../../providers/services/apis/liquidation/liquidation.service';
import {SnackBarComponent} from '../../shared/snack-bar.component';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  ngOnInit(): void {
  }


}

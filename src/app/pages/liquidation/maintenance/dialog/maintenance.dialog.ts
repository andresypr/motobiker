import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MaintenaceModel} from '../../../../models/maintenace.model';

import {InitialiseUtil} from '../../../../providers/utils/initialise-util';

import {LiquidationService} from '../../../../providers/services/apis/liquidation/liquidation.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './maintenance.dialog.html',
  styleUrls: ['./maintenance.dialog.scss']
})
export class MaintenanceDialog implements OnInit {


  form: FormGroup;
  maintenance: MaintenaceModel;

  option: number;
  title: string;

  constructor(private dialogRef: MatDialogRef<MaintenanceDialog>,
              @Inject(MAT_DIALOG_DATA) data,
              private service: LiquidationService) {
    this.validateOrigin(data);
  }

  validateOrigin(data): void {
    if (data.transaction === 1) {
      this.title = 'Guardar';
      this.option = data.transaction;
      this.maintenance = InitialiseUtil.initialiseMaintenace();
    } else if (data.transaction === 2) {
      this.title = 'editar';
      this.option = data.transaction;
      this.maintenance = data.clientRes;
    } else if (data.transaction === 0) {
      this.title = 'Borrar';
      this.option = data.transaction;
      this.maintenance = data.clientRes;
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required]),
      client: new FormControl('', [Validators.required]),
      motorcycle: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  onSave() {
    this.service.saveMaintenance(this.maintenance).subscribe(
      value => this.dialogRef.close(this.maintenance),
      err => console.error(err)
    );
  }

  public onDelete() {
    this.service.deleteMaintenance(this.maintenance).subscribe(
      res => this.dialogRef.close(this.maintenance),
      err => console.error(err)
    );
  }

}

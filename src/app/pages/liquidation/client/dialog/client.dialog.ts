import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientModel} from '../../../../models/client.model';
import {LiquidationService} from '../../../../providers/services/apis/liquidation/liquidation.service';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {InitialiseUtil} from '../../../../providers/utils/initialise-util';
import {SnackBarComponent} from '../../../shared/snack-bar.component';

@Component({
  selector: 'app-client-dialog',
  templateUrl: './client.dialog.html',
  styleUrls: ['./client.dialog.scss']
})
export class ClientDialog implements OnInit {

  form: FormGroup;
  client: ClientModel;

  option: number;
  title: string;

  constructor(private dialogRef: MatDialogRef<ClientDialog>,
              @Inject(MAT_DIALOG_DATA) data,
              private service: LiquidationService) {
    this.validateOrigin(data);
  }

  validateOrigin(data): void {
    if (data.transaction === 1) {
      this.title = 'Guardar';
      this.option = data.transaction;
      this.client = InitialiseUtil.initialiseClient();
    } else if (data.transaction === 2) {
      this.title = 'editar';
      this.option = data.transaction;
      this.client = data.clientRes;
    } else if (data.transaction === 0) {
      this.title = 'Borrar';
      this.option = data.transaction;
      this.client = data.clientRes;
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      nit: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      identifier: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    });
  }

  onSave() {
    this.service.saveClient(this.client).subscribe(
      value => this.dialogRef.close(this.client),
      err => console.error(err)
    );
  }

  public onDelete() {
    this.service.deleteClient(this.client).subscribe(
      res => this.dialogRef.close(this.client),
      err => console.error(err)
    );
  }

}

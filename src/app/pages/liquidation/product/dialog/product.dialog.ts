import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {LiquidationService} from '../../../../providers/services/apis/liquidation/liquidation.service';
import {InitialiseUtil} from '../../../../providers/utils/initialise-util';
import {ProductModel} from '../../../../models/product.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './product.dialog.html',
  styleUrls: ['./product.dialog.scss']
})
export class ProductDialog implements OnInit {

  form: FormGroup;
  product: ProductModel;

  option: number;
  title: string;

  constructor(private dialogRef: MatDialogRef<ProductDialog>,
              @Inject(MAT_DIALOG_DATA) data,
              private service: LiquidationService) {
    this.validateOrigin(data);
  }

  validateOrigin(data): void {
    if (data.transaction === 1) {
      this.title = 'Guardar';
      this.option = data.transaction;
      this.product = InitialiseUtil.initialiseProduuct();
    } else if (data.transaction === 2) {
      this.title = 'editar';
      this.option = data.transaction;
      this.product = data.clientRes;
    } else if (data.transaction === 0) {
      this.title = 'Borrar';
      this.option = data.transaction;
      this.product = data.clientRes;
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
  }

  onSave() {
    this.service.saveProduct(this.product).subscribe(
      value => this.dialogRef.close(this.product),
      err => console.error(err)
    );
  }

  public onDelete() {
    this.service.deleteProduct(this.product).subscribe(
      res => this.dialogRef.close(this.product),
      err => console.error(err)
    );
  }

}

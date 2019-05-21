import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';


import {LiquidationService} from '../../../providers/services/apis/liquidation/liquidation.service';


import {SnackBarComponent} from '../../shared/snack-bar.component';
import {ProductModel} from '../../../models/product.model';
import {ProductDialog} from './dialog/product.dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  durationInSeconds = 5;

  displayedColumns = ['code', 'name', 'price', 'category', 'options'];
  dataSource: MatTableDataSource<ProductModel>;
  products: ProductModel[];
  //
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: LiquidationService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.service.getProducts().subscribe(
      res => {
        this.products = res;
        this.dataSource = new MatTableDataSource(this.products);
      },
      err => console.error(err)
    );
  }

  onEdit(client: ProductModel): void {
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '90%',
      height: '80%',
      disableClose: true,
      data: {clientRes: client, transaction: 2}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        const index = this.products.map(skill => skill.code).indexOf(res.code);
        this.products[index] = res;
        this.dataSource = new MatTableDataSource(this.products);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: this.durationInSeconds * 1000,
        });
      },
      err => console.error(err));
  }

  onSave(): void {
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '90%',
      height: '80%',
      disableClose: true,
      data: {transaction: 1}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.products.push(res);
        this.dataSource = new MatTableDataSource(this.products);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: this.durationInSeconds * 1000,
        });
      },
      err => console.error(err)
    );
  }

  onDelete(client: ProductModel) {
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '20%',
      height: '30%',
      disableClose: true,
      data: {clientRes: client, transaction: 0}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        const index = this.products.map(skill => skill.code).indexOf(res.code);
        this.products.splice(index, 1);
        this.dataSource = new MatTableDataSource(this.products);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: this.durationInSeconds * 1000,
        });
      },
      err => console.error(err));
  }


}

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';

import {LiquidationService} from '../../../providers/services/apis/liquidation/liquidation.service';

import {SnackBarComponent} from '../../shared/snack-bar.component';

import {MaintenanceDialog} from './dialog/maintenance.dialog';

import {MaintenaceModel} from '../../../models/maintenace.model';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  durationInSeconds = 5;

  displayedColumns = ['code', 'code', 'motorcycle', 'description', 'cost', 'options'];
  dataSource: MatTableDataSource<MaintenaceModel>;
  clients: MaintenaceModel[];
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
    this.service.getMaintenance().subscribe(
      res => {
        this.clients = res;
        this.dataSource = new MatTableDataSource(this.clients);
      },
      err => console.error(err)
    );
  }

  onEdit(client: MaintenaceModel): void {
    const dialogRef = this.dialog.open(MaintenanceDialog, {
      width: '90%',
      height: '80%',
      disableClose: true,
      data: {clientRes: client, transaction: 2}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        const index = this.clients.map(skill => skill.code).indexOf(res.code);
        this.clients[index] = res;
        this.dataSource = new MatTableDataSource(this.clients);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: this.durationInSeconds * 1000,
        });
      },
      err => console.error(err));
  }

  onSave(): void {
    const dialogRef = this.dialog.open(MaintenanceDialog, {
      width: '90%',
      height: '80%',
      disableClose: true,
      data: {transaction: 1}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.clients.push(res);
        this.dataSource = new MatTableDataSource(this.clients);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: this.durationInSeconds * 1000,
        });
      },
      err => console.error(err)
    );
  }

  onDelete(client: MaintenaceModel) {
    const dialogRef = this.dialog.open(MaintenanceDialog, {
      width: '20%',
      height: '30%',
      disableClose: true,
      data: {clientRes: client, transaction: 0}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        const index = this.clients.map(skill => skill.code).indexOf(res.code);
        this.clients.splice(index, 1);
        this.dataSource = new MatTableDataSource(this.clients);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: this.durationInSeconds * 1000,
        });
      },
      err => console.error(err));
  }


}

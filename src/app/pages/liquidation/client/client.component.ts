import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';

import {LiquidationService} from '../../../providers/services/apis/liquidation/liquidation.service';

import {ClientModel} from '../../../models/client.model';

import {SnackBarComponent} from '../../shared/snack-bar.component';

import {ClientDialog} from './dialog/client.dialog';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  durationInSeconds = 5;

  displayedColumns = ['nit', 'name', 'identifier', 'phone', 'options'];
  dataSource: MatTableDataSource<ClientModel>;
  clients: ClientModel[];
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
    this.service.getClient().subscribe(
      res => {
        this.clients = res;
        this.dataSource = new MatTableDataSource(this.clients);
      },
      err => console.error(err)
    );
  }

  onEdit(client: ClientModel): void {
    const dialogRef = this.dialog.open(ClientDialog, {
      width: '90%',
      height: '80%',
      disableClose: true,
      data: {clientRes: client, transaction: 2}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        const index = this.clients.map(skill => skill.nit).indexOf(res.nit);
        this.clients[index] = res;
        this.dataSource = new MatTableDataSource(this.clients);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: this.durationInSeconds * 1000,
        });
      },
      err => console.error(err));
  }

  onSave(): void {
    const dialogRef = this.dialog.open(ClientDialog, {
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

  onDelete(client: ClientModel) {
    const dialogRef = this.dialog.open(ClientDialog, {
      width: '20%',
      height: '30%',
      disableClose: true,
      data: {clientRes: client, transaction: 0}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        const index = this.clients.map(skill => skill.nit).indexOf(res.nit);
        this.clients.splice(index, 1);
        this.dataSource = new MatTableDataSource(this.clients);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: this.durationInSeconds * 1000,
        });
      },
      err => console.error(err));
  }

}

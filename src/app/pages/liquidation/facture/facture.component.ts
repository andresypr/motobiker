import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {LiquidationService} from '../../../providers/services/apis/liquidation/liquidation.service';
import {FactureModel} from '../../../models/facture.model';


import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {

  factory: FactureModel = new class implements FactureModel {
    total: number;
    client: string;
    date: string;
    id: number;
    iva: number;
    maintenance: string;
    subTotal: number;
  };

  constructor(private fb: FormBuilder,
              private service: LiquidationService) {
  }

  ngOnInit(): void {
    this.service.getFacture().subscribe(
      value => this.factory = value,
      error1 => console.error(error1)
    );
  }

  onClick() {
    const doc = new jsPDF();
    doc.text(40, 20, 'MOTOBOKER');
    doc.text(20, 40, 'Nit: 929045824820-1');
    doc.text(20, 60, 'Cliente: ' + this.factory.client);
    doc.text(20, 70, 'Identificacion: ' + this.factory.id);
    doc.text(20, 80, 'Fecha: ' + this.factory.date);
    doc.text(20, 100, 'Mantenimiento: ' + this.factory.maintenance);
    doc.text(20, 120, 'Sub Total: ' + this.factory.maintenance);
    doc.text(20, 130, 'Iva: ' + this.factory.maintenance);
    doc.text(20, 140, 'Total: ' + this.factory.maintenance);

    // Save the PDF
    doc.save('Test.pdf');
  }

}

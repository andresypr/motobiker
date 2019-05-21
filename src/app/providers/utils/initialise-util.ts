import {Injectable} from '@angular/core';
import {ClientModel} from '../../models/client.model';
import {MaintenaceModel} from '../../models/maintenace.model';
import {ProductModel} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class InitialiseUtil {

  static initialiseClient(): ClientModel {
    return new class implements ClientModel {
      identifier: number;
      name: string;
      nit: number;
      phone: number;
    };
  }

  static initialiseMaintenace(): MaintenaceModel {
    return new class implements MaintenaceModel {
      client: number;
      code: number;
      cost: number;
      date: string;
      description: string;
      motorcycle: string;
    };
  }

  static initialiseProduuct(): ProductModel {
    return new class implements ProductModel {
      category: string;
      code: number;
      name: string;
      price: number;
    };
  }
}

import {Injectable} from '@angular/core';
import {ClientModel} from '../../models/client.model';

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

}

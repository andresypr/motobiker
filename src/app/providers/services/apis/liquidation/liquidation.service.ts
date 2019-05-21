import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {ClientModel} from '../../../../models/client.model';
import {catchError, tap} from 'rxjs/operators';
import {RespModel} from '../../../../models/resp.model';
import {MaintenaceModel} from '../../../../models/maintenace.model';

@Injectable({
  providedIn: 'root'
})
export class LiquidationService {

  constructor(private api: ApiService) {
  }

  getClient(): Observable<ClientModel[]> {
    const endPoint = `${environment.apiUrl}/ConsultClient`;
    return this.api.get(endPoint).pipe(
      tap((value: ClientModel[]) => value)
      // catchError(this.api.)
    );
  }

  saveClient(client: ClientModel): Observable<RespModel> {
    const endPoint = `${environment.apiUrl}/CreateClient`;
    return this.api.post(endPoint, client).pipe(
      tap((res: RespModel) => res)
    );
  }

  deleteClient(client: ClientModel): Observable<RespModel> {
    const endPoint = `${environment.apiUrl}/RemoveClient`;
    return this.api.post(endPoint, client).pipe(
      tap((res: RespModel) => res)
    );
  }

  getMaintenance(): Observable<MaintenaceModel[]> {
    const endPoint = `${environment.apiUrl}/ConsultMaintenance`;
    return this.api.get(endPoint).pipe(
      tap((value: MaintenaceModel[]) => value)
      // catchError(this.api.)
    );
  }

  saveMaintenance(maintenance: MaintenaceModel): Observable<RespModel> {
    const endPoint = `${environment.apiUrl}/CreateMaintenance`;
    return this.api.post(endPoint, maintenance).pipe(
      tap((res: RespModel) => res)
    );
  }

  deleteMaintenance(maintenance: MaintenaceModel): Observable<RespModel> {
    const endPoint = `${environment.apiUrl}/RemoveMaintenance`;
    return this.api.post(endPoint, maintenance).pipe(
      tap((res: RespModel) => res)
    );
  }

}

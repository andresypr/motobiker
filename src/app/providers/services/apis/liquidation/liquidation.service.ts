import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {ClientModel} from '../../../../models/client.model';
import {catchError, tap} from 'rxjs/operators';
import {RespModel} from '../../../../models/resp.model';

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
    const endpoint = `${environment.apiUrl}/CreateClient`;
    return this.api.post(endpoint, client).pipe(
      tap((res: RespModel) => res)
    );
  }

  deleteClient(client: ClientModel): Observable<RespModel> {
    const endpoint = `${environment.apiUrl}/BorrarMantenimiento`;
    return this.api.post(endpoint, client).pipe(
      tap((res: RespModel) => res)
    );
  }

  createMaintenance(maintenance: ClientModel): Observable<RespModel> {
    const endpoint = `${environment.apiUrl}/CrearMantenimiento`;
    return this.api.post(endpoint, maintenance).pipe(
      tap((value: RespModel) => value)
      // catchError(this.api.)
    );
  }
}

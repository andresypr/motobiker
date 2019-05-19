import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ApiService} from '../api.service';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService: ApiService) {
  }

  login(autentication): Observable<any> {
    const endpoint = `${environment.apiUrl}/login`;
    return this.apiService.post(endpoint, autentication).pipe(
      tap(res => res)
    );
  }

}

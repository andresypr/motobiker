import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  /***
   * @author Daniel Castellanos
   * Esta función se utilizara para la generación de la cabecera que va a usar el cliente
   * @return se retorna la cabecera sub-lista para enviar y recibir contenido JSON
   */
  public appendHeaders() {
    const header = new HttpHeaders({token: ''});
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    header.append('Access-Control-Allow-Methods', 'POST, GET');
    // header.append('idEncargo', this.coreService.get Encargo());
    // header.append('ipUsuario', this.coreService.getIpUsuario());
    // header.append('origenToken', sessionStorage.getItem('origenToken'));
    // header.append('idUsuario', this.coreService.getIdUsuario());
    // header.append('urlPath', location.hostname + '/' + location.hash);
    return header;
  }

  /**
   * @author Daniel Castellanos
   * Esta función se utilizara para la generación de la cabecera que va a usar el cliente
   * @return se retorna la cabecera sub-lista para enviar y recibir contenido JSON, con el token de sección que tiene el usuario
   */
  public appendHeadersFile(): HttpHeaders {
    const header = new HttpHeaders({token: ''});
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    // header.append('idEncargo', this.coreService.getEncargo());
    // header.append('idUsuario', this.coreService.getIdUsuario() );
    header.append('X-FORWARDED-FOR', '');
    // header.append('origenToken', sessionStorage.getItem('origenToken'));
    // header.append('token', this.coreService.getToken());
    header.append('urlPath', location.hostname + '/' + location.hash);
    return header;
  }

  /**
   * @author Daniel Castellanos
   * @description Este método se va a utilizar para el consumo de servicios rest que no necesiten un token de seguridad.
   * @param url: en este parámetro se envía la url del servicio rest que se va a consumir.
   * @param body: en este parámetro se envió el contenido que me pide el servicio para responder.
   * @return Se retorna un Observable de la respuesta arrojada por el servicio
   */
  public post(url: string, body: any) {
    return this.http.post(url, body, {headers: this.appendHeaders()});
  }

  /**
   * @author Daniel Castellanos
   * @descriptionEste método se va a utilizar para el consumo de servicios rest que necesiten un token de seguridad.
   * @param url en este parámetro se envía la url del servicio rest que se va a consumir.
   * @param body: en este parámetro se envió el contenido que me pide el servicio para responder.
   * @return Se retorna un Observable de la respuesta arrojada por el servicio.
   */
  postFile(url: string, body: any) {
    return this.http.post(url, body, {headers: this.appendHeadersFile()});
  }

  /**
   * @author Daniel Castellanos
   * Este método se va a utilizar para el consumo de servicios rest que no necesiten un token de seguridad.
   * @param url en este parámetro se envía la url del servicio rest que se va a consumir.
   * @return Se retorna un Observable de la respuesta arrojada por el servicio.
   */
  get(url: string, param?: any) {
    return this.http.get(url, {headers: this.appendHeaders(), params: param});
  }

  /**
   * @author Daniel Castellanos
   * @description: Este método se va a utilizar para el consumo de servicios rest que necesiten un token de seguridad.
   * @param: url: en este parámetro se envía la url del servicio rest que se va a consumir.
   * @param: param
   * @return: Se retorna un Observable de la respuesta arrojada por el servicio.
   */
  getFile(url: string, param?: any) {
    return this.http.get(url, {headers: this.appendHeadersFile(), params: param});
  }

  /**
   * @author Daniel Castellanos
   * @description:
   * @param url:
   */
  delete(url: string) {
    return this.http.delete(url, {headers: this.appendHeaders()});
  }

  /**
   * @author Daniel Castellanos
   * @param url:
   * @param body:
   */
  put(url: string, body: any) {
    return this.http.put(url, body, {headers: this.appendHeaders()});
  }

}

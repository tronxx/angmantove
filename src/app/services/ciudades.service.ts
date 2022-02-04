import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfiguracionService } from './configuracion.service'
import { Ciudades } from '../models/ciudades';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  url = 'http://localhost/mantove/serviciosx/';

  constructor(private http: HttpClient ,private configuracion: ConfiguracionService ) { 
    this.url = this.configuracion.obtenurl();
   }

   
   buscaCiudades ( ): Observable<Ciudades[]> {
    let misparamold_z = {
      modo:"buscar_ciudades"
    };

    var miurl = this.url + "ciudades.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparamold_z);
    
    return this.http.post<Ciudades[]>(miurl, misparamold_z, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Zonas')),
      catchError(this.handleError<Ciudades[]>('Ocurrio un error en Post Zonas'))

    );
    // return this.http.post(this.url + 'usuarios/busca_usuarios.php', body,{'headers':headers});

  }

  agregarCiudad ( params: string): Observable<Ciudades[]> {
    let misparamold_z = JSON.parse(params);
    let params_z = {
      "modo"  :"agregar_ciudad",
      "idCiudad":misparamold_z.idCiudad,
      "ciudad"  :misparamold_z.ciudad
    }
    var miurl = this.url + "ciudades.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparamold_z);
    
    return this.http.post<Ciudades[]>(miurl, params_z, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Zonas')),
      catchError(this.handleError<Ciudades[]>('Ocurrio un error en Post Zonas'))

    );
    // return this.http.post(this.url + 'usuarios/busca_usuarios.php', body,{'headers':headers});

  }


  modificarCiudad ( params: string): Observable<Ciudades[]> {
    let misparamold_z = JSON.parse(params);
    let params_z = {
      "modo"  :"modificar_ciudad",
      "idCiudad":misparamold_z.idCiudad,
      "ciudad"  :misparamold_z.ciudad
    }
    var miurl = this.url + "ciudades.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparamold_z);
    
    return this.http.post<Ciudades[]>(miurl, params_z, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Zonas')),
      catchError(this.handleError<Ciudades[]>('Ocurrio un error en Post Zonas'))

    );
    // return this.http.post(this.url + 'usuarios/busca_usuarios.php', body,{'headers':headers});

  }

  eliminarCiudad ( params: string): Observable<Ciudades[]> {
    let misparamold_z = JSON.parse(params);
    let params_z = {
      "modo"  :"eliminar_ciudad",
      "idCiudad":misparamold_z.idCiudad,
      "ciudad"  :misparamold_z.ciudad
    }
    var miurl = this.url + "ciudades.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparamold_z);
    
    return this.http.post<Ciudades[]>(miurl, params_z, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Zonas')),
      catchError(this.handleError<Ciudades[]>('Ocurrio un error en Post Zonas'))

    );
    // return this.http.post(this.url + 'usuarios/busca_usuarios.php', body,{'headers':headers});

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`CiudadesService: ${message}`);
  }


}

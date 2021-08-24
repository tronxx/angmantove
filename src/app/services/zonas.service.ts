import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfiguracionService } from './configuracion.service'
import { Zona } from '../models/zonas';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  url = 'http://localhost/mantove/serviciosx/';

  constructor(private http: HttpClient ,private configuracion: ConfiguracionService ) { 
   this.obtenurl();
  }

  obtenurl () {
    this.url = this.configuracion.obtenurl();
  }

  buscaZonas ( params: string): Observable<Zona[]> {
    let misparamold_z = {};
    misparamold_z = JSON.parse(params);
   
    
    var miurl = this.url + "zonas.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparamold_z);
    
    return this.http.post<Zona[]>(miurl, misparamold_z, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Zonas')),
      catchError(this.handleError<Zona[]>('Ocurrio un error en Post Zonas'))

    );
    // return this.http.post(this.url + 'usuarios/busca_usuarios.php', body,{'headers':headers});

  }

  agregarZona ( params: string): Observable<Zona[]> {
    let misparamold_z = {};
    misparamold_z = JSON.parse(params);
   
    
    var miurl = this.url + "zonas.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparamold_z);
    
    return this.http.post<Zona[]>(miurl, misparamold_z, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Zonas')),
      catchError(this.handleError<Zona[]>('Ocurrio un error en Post Zonas'))

    );
    // return this.http.post(this.url + 'usuarios/busca_usuarios.php', body,{'headers':headers});

  }

  modificarZona ( params: string): Observable<Zona[]> {
    let misparamold_z = {};
    misparamold_z = JSON.parse(params);
   
    
    var miurl = this.url + "zonas.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparamold_z);
    
    return this.http.post<Zona[]>(miurl, misparamold_z, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Zonas')),
      catchError(this.handleError<Zona[]>('Ocurrio un error en Post Zonas'))

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
    console.log(`UsuariosService: ${message}`);
  }


}

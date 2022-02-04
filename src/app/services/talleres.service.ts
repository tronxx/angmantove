import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfiguracionService } from './configuracion.service'
import { Taller } from '../models/talleres';

@Injectable({
  providedIn: 'root'
})
export class TalleresService {
  url = 'http://localhost/mantove/serviciosx/';

  constructor(private http: HttpClient ,private configuracion: ConfiguracionService ) { 
    this.obtenurl();
   }

   obtenurl () {
    this.url = this.configuracion.obtenurl();
  }

  buscaTalleres ( params: string): Observable<Taller[]> {
    let misparamold_z = {};
    misparamold_z = JSON.parse(params);
   
    var miurl = this.url + "talleres.php";
    console.log("Debug: Talleres Service: url", this.url, " miurl:", miurl );
    const headers = { 'content-type': 'text/plain'};
    // const body=JSON.stringify(misparamold_z);
    
    return this.http.post<Taller[]>(miurl, misparamold_z, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Almacenes')),
      catchError(this.handleError<Taller[]>('Ocurrio un error en Post Almacenes'))

    );
    // return this.http.post(this.url + 'usuarios/busca_usuarios.php', body,{'headers':headers});

  }

  agregarTaller ( params: string): Observable<Taller> {
    let misparamold_z = JSON.parse(params);
    let misparams = {
      'modo':'agregar_taller',
      'idtaller':misparamold_z.idtaller,
      'clave':misparamold_z.clave,
      'nombre':misparamold_z.nombre,
      'representante':misparamold_z.representante,
      'direccion':misparamold_z.direccion,
      'telefonos':misparamold_z.telefonos,
      'giro':misparamold_z.giro,
      "idEstatus":1
    }
   
    
    let miurl = this.url + "talleres.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparams);
    console.log("Talleres Service:", misparams);
    
    return this.http.post<Taller>(miurl, misparams, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Taller')),
      catchError(this.handleError<Taller>('Ocurrio un error en Post Taller'))

    );
    // return this.http.post(this.url + 'usuarios/busca_usuarios.php', body,{'headers':headers});


  }

  modificarTaller ( params: string): Observable<Taller> {
    let misparamold_z = JSON.parse(params);
    let misparams = {
      'modo':'modificar_taller',
      'idtaller':misparamold_z.idtaller,
      'clave':misparamold_z.clave,
      'nombre':misparamold_z.nombre,
      'representante':misparamold_z.representante,
      'direccion':misparamold_z.direccion,
      'telefonos':misparamold_z.telefonos,
      'giro':misparamold_z.giro,
      "idEstatus":1
    }
   
    
    let miurl = this.url + "talleres.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparams);
    console.log("Talleres Service:", misparams);
    
    return this.http.post<Taller>(miurl, misparams, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Taller')),
      catchError(this.handleError<Taller>('Ocurrio un error en Post Modificar Taller'))

    );
    // return this.http.post(this.url + 'usuarios/busca_usuarios.php', body,{'headers':headers});

    

  }

  eliminarTaller ( params: string): Observable<Taller> {
    let misparamold_z = JSON.parse(params);
    let misparams = {
      'modo':'eliminar_taller',
      'idtaller':misparamold_z.idtaller,
      'clave':misparamold_z.clave,
      'nombre':misparamold_z.nombre,
      'representante':misparamold_z.representante,
      'direccion':misparamold_z.direccion,
      'telefonos':misparamold_z.telefonos,
      'giro':misparamold_z.giro,
      "idEstatus":1
    }
   
    
    let miurl = this.url + "talleres.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparams);
    console.log("Talleres Service:", misparams);
    
    return this.http.post<Taller>(miurl, misparams, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Taller')),
      catchError(this.handleError<Taller>('Ocurrio un error en Post Modificar Taller'))

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
    console.log(`AlmaceneService: ${message}`);
  }

}

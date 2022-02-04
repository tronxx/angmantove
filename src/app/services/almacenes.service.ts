import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfiguracionService } from './configuracion.service'
import { Almacen } from '../models/almacenes';

@Injectable({
  providedIn: 'root'
})
export class AlmacenesService {

  url = 'http://localhost/mantove/serviciosx/';

  constructor(private http: HttpClient ,private configuracion: ConfiguracionService ) { 
    this.obtenurl();
   }
 
   obtenurl () {
     this.url = this.configuracion.obtenurl();
   }
 
  buscaAlmacenes ( params: string): Observable<Almacen[]> {
    let misparamold_z = {};
    misparamold_z = JSON.parse(params);
   
    
    var miurl = this.url + "almacenes.php";
    console.log("Debug: Almacenes Service: url", this.url, " miurl:", miurl );
    const headers = { 'content-type': 'text/plain'};
    // const body=JSON.stringify(misparamold_z);
    
    return this.http.post<Almacen[]>(miurl, misparamold_z, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Almacenes')),
      catchError(this.handleError<Almacen[]>('Ocurrio un error en Post Almacenes'))

    );
    // return this.http.post(this.url + 'usuarios/busca_usuarios.php', body,{'headers':headers});

  }


  agregarAlmacen ( params: string): Observable<Almacen> {
    let misparamold_z = JSON.parse(params);
    let misparams = {
      'modo':'agregar_almacen',
      'idalmacen':misparamold_z.idalmacen,
      'clave':misparamold_z.clave,
      'nombre':misparamold_z.nombre,
      'direccion':misparamold_z.direccion,
      'ciudad':misparamold_z.ciudad
    }
   
    
    let miurl = this.url + "almacenes.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparams);
    console.log("MiAlmacenes Service:", misparams);
    
    return this.http.post<Almacen>(miurl, misparams, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Almacenes')),
      catchError(this.handleError<Almacen>('Ocurrio un error en Post Almacenes'))

    );
    // return this.http.post(this.url + 'usuarios/busca_usuarios.php', body,{'headers':headers});


  }

  modificarAlmacen ( params: string): Observable<Almacen> {
    let misparamold_z = JSON.parse(params);
    let misparams = {
      'modo':'modificar_almacen',
      'idalmacen':misparamold_z.idalmacen,
      'clave':misparamold_z.clave,
      'nombre':misparamold_z.nombre,
      'direccion':misparamold_z.direccion,
      'ciudad':misparamold_z.ciudad
    }
   
    
    let miurl = this.url + "almacenes.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparams);
    console.log("MiAlmacenes Service:", misparams);
    
    return this.http.post<Almacen>(miurl, misparams, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Almacenes')),
      catchError(this.handleError<Almacen>('Ocurrio un error en Post Almacenes'))

    );
    // return this.http.post(this.url + 'usuarios/busca_usuarios.php', body,{'headers':headers});

  }

  eliminarAlmacen ( params: string): Observable<Almacen> {
    let misparamold_z = JSON.parse(params);
    let misparams = {
      'modo':'eliminar_almacen',
      'idalmacen':misparamold_z.idalmacen,
      'clave':misparamold_z.clave,
      'nombre':misparamold_z.nombre,
      'direccion':misparamold_z.direccion,
      'ciudad':misparamold_z.ciudad
    }
   
    
    let miurl = this.url + "almacenes.php"
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(misparams);
    console.log("MiAlmacenes Service:", misparams);
    
    return this.http.post<Almacen>(miurl, misparams, {'headers':headers}).
    pipe(
      tap(_ => this.log('fetched Almacenes')),
      catchError(this.handleError<Almacen>('Ocurrio un error en Post Almacenes'))

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

import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  config = {
    "estado":"-1",
    "cia": 0,
  }

  cias = [
    {
      "urldatos":" http://localhost:80/mantove/servicios/",
      "empresa": "Mi Empresa SA de CV",
      "rfc": "XAXX010101000",
      "direc": "Calle 67 x 60 y 62 Centro",
      "CP": "97000",
      "logo":""
    },
    {
      "urldatos":"localhost://mantove/",
      "empresa": "ElectroClub del Sureste S de RL de CV",
      "rfc": "ESU160109EX9",
      "direc": "Calle 67 x 60 y 62 Centro",
      "CP": "97000",
      "logo":""
    }
   ];

  constructor(private http: HttpClient) { 
    this.obtenconfig();
  }

  obtenconfig () {
    this.http.get<any>("../assets/config/config.json").subscribe( datos => {
      this.cias = datos;
      this.config.estado = "OK";
      this.config.cia = 0;
      //console.log("url:" + this.url)
      console.log("Debug: Ya hice llamado a configuracion:", this.config.estado);
    });

  }

  obtenurl () {
    if(this.config.estado != "OK") {
      console.log("Debug: aun no he llamado a configuracion:", this.config.estado);
      this.obtenconfig();
    }
    //console.log("Debug: Ya hice llamado a configuracion:", this.config.estado);
    return(this.cias[this.config.cia].urldatos);
  }


}

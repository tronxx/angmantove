import { Component, OnInit } from '@angular/core';
import { Zona } from '../models/zonas';
import {  DialogyesnoComponent } from '../common/dialogyesno/dialogyesno.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import  { ZonasService } from '../services/zonas.service'
import {MatCardModule} from '@angular/material/card';
import { isEmpty } from 'rxjs/operators';
import { FormControl, FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { DlgeditzonaComponent } from './dlgeditzona/dlgeditzona.component';

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements OnInit {

  
  zonas : Zona[] = [];
  zona?: Zona;
  zonanumero = 0;
  zonanombre = "";

  zonaedit = {
    "titulo": "Proporcione los datos de la Zona",
    "idzona": 0,
    "numero": 0,
    "zona": ""
  };


  editandozona = false;

  constructor(
    public dialog: MatDialog, private servicioZonas: ZonasService,
    public dlgEditZona: MatDialog
  ) { }

  ngOnInit(): void {
    this.cargaZonas();
  }

  cargaZonas() {
    let params_z = {
      "modo":"buscar_zonas",
      "modo2":"agregar_zona",
      "numero":"",
      "zona":""
    }
    this.servicioZonas.buscaZonas(JSON.stringify(params_z)).subscribe(
      respu => {
        this.zonas = respu;
      }
    );

  }

  agregar() {
    this.zona = <Zona> {}
    this.zona.idzona = -1;
    const dlgedit = this.dlgEditZona.open(DlgeditzonaComponent, {
      width: '350px',
      data : JSON.stringify(this.zona)
    });
    dlgedit.afterClosed().subscribe(resultado => {
      if(resultado) {
        console.log("resultado Edit:", resultado);
        this.zona = resultado;
        this.servicioZonas.agregarZona(JSON.stringify(this.zona)).subscribe(
          respu => {
            this.cargaZonas();
          }
        );
      
      }

    });

  }


  eliminar(mizona : Zona) {
    const dialogref = this.dialog.open(DialogyesnoComponent, {
      width:'350px',
      data: 'Seguro de Eliminar Esta Zona ?'
    });
    dialogref.afterClosed().subscribe(res => {
      console.log("Debug", res);
      if(res) {
        this.servicioZonas.eliminarZona(JSON.stringify(mizona)).subscribe(
          respu => {
            this.cargaZonas();
          }
        )
      }
    });


  }

  modificar(mizona: Zona) {
    const dlgedit = this.dlgEditZona.open(DlgeditzonaComponent, {
      width: '350px',
      data : JSON.stringify(mizona)
    });
    dlgedit.afterClosed().subscribe(resultado => {
      console.log("resultado Edit:", resultado);
      if(resultado) {
        this.zona = resultado;
        this.servicioZonas.modificarZona(JSON.stringify(this.zona)).subscribe(
          respu => {
            this.cargaZonas();
          }
        )
      }
    });
  }

}

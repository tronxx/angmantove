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
    )
  }

  agregar() {
    // console.log("mizona:", mizona);
    if(this.zona) {
      this.zonaedit.zona = this.zona.zona;
      this.zonaedit.numero = this.zona.numero;
      this.zonaedit.idzona = this.zona.idzona;
    }
      const dlgedit = this.dlgEditZona.open(DlgeditzonaComponent, {
        width: '350px',
        data : JSON.stringify(this.zonaedit)
      });
      dlgedit.afterClosed().subscribe(resultado => {
        console.log("resultado Edit:", resultado);
        this.zonaedit = resultado;
        this.aceptar_agregar();

      });

  }

  seleccionar(mizona: Zona) {
    this.zona = mizona;
  }

  cancelar_agregar() {
    this.editandozona = false;

  }

  aceptar_agregar() {
    let params_z = {
      "modo2":"buscar_zonas",
      "modo":"agregar_zona",
      "numero":this.zonaedit.numero,
      "zona":this.zonaedit.zona
    }
    this.servicioZonas.agregarZona(JSON.stringify(params_z)).subscribe(
      respu => {
        this.cargaZonas();
      }
    )

  }

  eliminar() {
    const dialogref = this.dialog.open(DialogyesnoComponent, {
      width:'350px',
      data: 'Seguro de Eliminar Esta Zona ?'
    });
    dialogref.afterClosed().subscribe(res => {
      console.log("Debug", res);
      if(res) {
        let params_z = {
          "modo2" :"eliminar_zona",
          "modo"  :"modificar_zona",
          "idzona":this.zonaedit.idzona,
          "numero":this.zonaedit.numero,
          "zona"  :this.zonaedit.zona
        }
        this.servicioZonas.agregarZona(JSON.stringify(params_z)).subscribe(
          respu => {
            this.cargaZonas();
          }
        )
    
          
      }
    });

  }

  abrirdialogo() {

  }

  modificar(mizona: Zona) {
    // console.log("mizona:", mizona);
    this.zona = mizona;
    if(this.zona) {
      this.zonaedit.zona = this.zona.zona;
      this.zonaedit.numero = this.zona.numero;
      this.zonaedit.idzona = this.zona.idzona;
      const dlgedit = this.dlgEditZona.open(DlgeditzonaComponent, {
        width: '350px',
        data : JSON.stringify(this.zonaedit)
      });
      dlgedit.afterClosed().subscribe(resultado => {
        console.log("resultado Edit:", resultado);
        this.zonaedit = resultado;
        this.modificar_zona();

      });

  
    }
    
  }

  modificar_zona() {
    let params_z = {
      "modo2" :"buscar_zonas",
      "modo"  :"modificar_zona",
      "idzona":this.zonaedit.idzona,
      "numero":this.zonaedit.numero,
      "zona"  :this.zonaedit.zona
    }
    this.servicioZonas.agregarZona(JSON.stringify(params_z)).subscribe(
      respu => {
        this.cargaZonas();
      }
    )

  }

}

import { Component, OnInit } from '@angular/core';
import { Ciudades } from '../models/ciudades';
import {  DialogyesnoComponent } from '../common/dialogyesno/dialogyesno.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import  { CiudadesService } from '../services/ciudades.service';
import {MatCardModule} from '@angular/material/card';
import { isEmpty } from 'rxjs/operators';
import { FormControl, FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { DlgeditciudadComponent } from './dlgeditciudad/dlgeditciudad.component';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  ciudades : Ciudades[] = [];
  ciudad?:Ciudades;

  constructor(
    public dialog: MatDialog, private servicioCiudades: CiudadesService,
    public dlgEditCiudad: MatDialog

  ) { }

  ngOnInit(): void {
    this.cargaCiudades();
  }

  cargaCiudades() {
    this.servicioCiudades.buscaCiudades().subscribe(
      respu => {
        this.ciudades = respu;
      }
    )

  }

  agregar() {
    // console.log("mizona:", mizona);
    this.ciudad = <Ciudades> {};
    this.ciudad.idCiudad =-1;
    const dlgedit = this.dlgEditCiudad.open(DlgeditciudadComponent, {
        width: '350px',
        data : JSON.stringify(this.ciudad)
    });
      dlgedit.afterClosed().subscribe(resultado => {
        if(resultado) {
          console.log("resultado Edit:", resultado);
          this.ciudad = resultado;
          this.servicioCiudades.agregarCiudad(JSON.stringify(this.ciudad)).subscribe(
            respu => {
              this.cargaCiudades();
            }
          );
        }
       
      });

  }

  modificar(ciudad:Ciudades) {
    // console.log("mizona:", mizona);
    this.ciudad = ciudad;
    const dlgedit = this.dlgEditCiudad.open(DlgeditciudadComponent, {
        width: '350px',
        data : JSON.stringify(this.ciudad)
    });
      dlgedit.afterClosed().subscribe(resultado => {
        if(resultado) {
          console.log("resultado Edit:", resultado);
          this.ciudad = resultado;
          this.servicioCiudades.modificarCiudad(JSON.stringify(this.ciudad)).subscribe(
            respu => {
              this.cargaCiudades();
            }
          );
        }
       
      });

  }

  eliminar(ciudad:Ciudades) {
    const dialogref = this.dialog.open(DialogyesnoComponent, {
      width:'350px',
      data: 'Seguro de Eliminar ' + ciudad.ciudad + ' ?'
    });
    dialogref.afterClosed().subscribe(res => {
      console.log("Debug", res);
      if(res) {
        this.servicioCiudades.eliminarCiudad(JSON.stringify(this.ciudad)).subscribe(
          respu => {
            this.cargaCiudades();
          }
        );
      }
    });
    
  }


}

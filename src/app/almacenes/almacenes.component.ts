import { Component, OnInit } from '@angular/core';
import { Almacen } from '../models/almacenes';
import {  DialogyesnoComponent } from '../common/dialogyesno/dialogyesno.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { AlmacenesService } from '../services/almacenes.service'
import { MatCardModule} from '@angular/material/card';
import { isEmpty } from 'rxjs/operators';
import { FormControl, FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { DlgEditAlmacenComponent } from './dlg-edit-almacen/dlg-edit-almacen.component';

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: ['./almacenes.component.css']
})
export class AlmacenesComponent implements OnInit {

  almacenes : Almacen[] = [];
  almacen?: Almacen;
  clave = "";
  nombre = "";

  constructor(
    public dialog: MatDialog, private servicioAlmacenes: AlmacenesService,
    public dlgEditAlmacen: MatDialog

  ) { }

  ngOnInit(): void {
    this.cargaAlmacenes();

  }

  cargaAlmacenes() {
    let params_z = {
      "modo":"buscar_almacenes",
      "modo2":"agregar_almacen"
    }
    this.servicioAlmacenes.buscaAlmacenes(JSON.stringify(params_z)).subscribe(
      respu => {
        this.almacenes = respu;
      }
    )
  }

  seleccionar(mialmacen:Almacen) {
    this.almacen = mialmacen;
  }

  modificar(mialmacen:Almacen) {
    // console.log("mizona:", mizona);
    this.almacen = mialmacen;
    if(this.almacen) {
      const dlgedit = this.dlgEditAlmacen.open(DlgEditAlmacenComponent, {
        width: '350px',
        data : JSON.stringify(this.almacen)
      });
      dlgedit.afterClosed().subscribe(resultado => {
        if(resultado) {
          console.log("resultado Edit:", resultado);
          this.almacen = resultado;
          this.servicioAlmacenes.modificarAlmacen(JSON.stringify(this.almacen)).subscribe(
            respu => {
              this.cargaAlmacenes();
            }
          );
        }
       
      });
    }
    
  }

  agregar() {
    // console.log("mizona:", mizona);
    this.almacen = <Almacen> {};
    this.almacen.idalmacen=-1;
    const dlgedit = this.dlgEditAlmacen.open(DlgEditAlmacenComponent, {
        width: '350px',
        data : JSON.stringify(this.almacen)
    });
      dlgedit.afterClosed().subscribe(resultado => {
        if(resultado) {
          console.log("resultado Edit:", resultado);
          this.almacen = resultado;
          this.servicioAlmacenes.agregarAlmacen(JSON.stringify(this.almacen)).subscribe(
            respu => {
              this.cargaAlmacenes();
            }
          );
        }
       
      });
  }

  eliminar(mialmacen:Almacen) {
    this.almacen = mialmacen;
    const dialogref = this.dialog.open(DialogyesnoComponent, {
      width:'350px',
      data: 'Seguro de Eliminar Este almacén ?'
    });
    dialogref.afterClosed().subscribe(res => {
      console.log("Debug", res);
      if(res) {
        this.servicioAlmacenes.eliminarAlmacen(JSON.stringify(this.almacen)).subscribe(
          respu => {
            this.cargaAlmacenes();
          });
      }
    });

  }

}

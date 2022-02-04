import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Almacen } from '../../models/almacenes';
import { Ciudades } from '../../models/ciudades';
import { CiudadesService } from '../../services/ciudades.service';

@Component({
  selector: 'app-dlg-edit-almacen',
  templateUrl: './dlg-edit-almacen.component.html',
  styleUrls: ['./dlg-edit-almacen.component.css']
})



export class DlgEditAlmacenComponent implements OnInit {

  ciudades : Ciudades[] = [];
  
  almacen?:Almacen;
  


  datosedit = {
    titulo: "Teclee los datos del Almacen"
  }

  constructor(
    public dialogRef: MatDialogRef <DlgEditAlmacenComponent>,
    private ciuadesservicio: CiudadesService,
    @Inject(MAT_DIALOG_DATA) public message : string

  ) { }

  ngOnInit(): void {
    this.almacen = JSON.parse(this.message);
    this.busca_ciudades();
  }

  busca_ciudades() {
    this.ciuadesservicio.buscaCiudades().subscribe(
      respu => {
        this.ciudades = respu;
      }
    )

  }

  closeno() {
    this.dialogRef.close(false);
  }

  close () {
    this.dialogRef.close(this.almacen);
  }


}

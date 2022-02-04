import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Taller } from '../../models/talleres';
import { Ciudades } from '../../models/ciudades';
import { CiudadesService } from '../../services/ciudades.service';

@Component({
  selector: 'app-dlgedittaller',
  templateUrl: './dlgedittaller.component.html',
  styleUrls: ['./dlgedittaller.component.css']
})
export class DlgedittallerComponent implements OnInit {

  ciudades : Ciudades[] = [];
  taller : Taller = <Taller> {}
  titulo = "Datos del Taller";


  constructor(
    public dialogRef: MatDialogRef <DlgedittallerComponent>,
    private ciuadesservicio: CiudadesService,
    @Inject(MAT_DIALOG_DATA) public message : string

  ) { }

  ngOnInit(): void {
    this.taller = JSON.parse(this.message);
  }

  busca_ciudades() {
  }

  closeno() {
    this.dialogRef.close(false);
  }

  close () {
    this.dialogRef.close(this.taller);
  }



}

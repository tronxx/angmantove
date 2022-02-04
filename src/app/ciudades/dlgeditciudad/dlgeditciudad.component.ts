import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Ciudades } from '../../models/ciudades';

@Component({
  selector: 'app-dlgeditciudad',
  templateUrl: './dlgeditciudad.component.html',
  styleUrls: ['./dlgeditciudad.component.css']
})
export class DlgeditciudadComponent implements OnInit {

  ciudad?:Ciudades;
  
  datosedit = {
    titulo: "Teclee los datos del Almacen"
  }

  constructor(
    public dialogRef: MatDialogRef <DlgeditciudadComponent>,
    @Inject(MAT_DIALOG_DATA) public message : string

  ) { }

  ngOnInit(): void {
    this.ciudad = JSON.parse(this.message);

  }

  
  closeno() {
    this.dialogRef.close(false);
  }

  close () {
    this.dialogRef.close(this.ciudad);
  }

}

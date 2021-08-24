import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dlgeditzona',
  templateUrl: './dlgeditzona.component.html',
  styleUrls: ['./dlgeditzona.component.css']
})
export class DlgeditzonaComponent implements OnInit {

  datosedit = {
    "titulo": "",
    "idzona": 0,
    "numero": 0,
    "zona": ""
  }

  constructor(
    public dialogRef: MatDialogRef <DlgeditzonaComponent>,
    @Inject(MAT_DIALOG_DATA) public message : string

  ) {
    this.datosedit = JSON.parse(message);
   }

  ngOnInit(): void {
  }

  closeno() {
    this.dialogRef.close(false);
  }

  close () {
    this.dialogRef.close(this.datosedit);
  }

}

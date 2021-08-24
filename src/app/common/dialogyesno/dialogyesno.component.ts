import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialogyesno',
  templateUrl: './dialogyesno.component.html',
  styleUrls: ['./dialogyesno.component.css']
})
export class DialogyesnoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef <DialogyesnoComponent>,
    @Inject(MAT_DIALOG_DATA) public message : string
  ) { }

  ngOnInit(): void {
  }
  
  close() {
    this.dialogRef.close(true);
  }

  closeno() {
    this.dialogRef.close(false);
  }

}

import { Component, OnInit } from '@angular/core';
import { Taller } from '../models/talleres';
import { DialogyesnoComponent } from '../common/dialogyesno/dialogyesno.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { TalleresService } from '../services/talleres.service'
import { MatCardModule} from '@angular/material/card';
import { isEmpty } from 'rxjs/operators';
import { FormControl, FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { DlgedittallerComponent } from './dlgedittaller/dlgedittaller.component';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {

  talleres : Taller[] = [];
  taller?: Taller;
  
  constructor(
    public dialog: MatDialog, private servicioTalleres: TalleresService,
    public dlgEditTaller: MatDialog

  ) { }

  ngOnInit(): void {
    this.cargaTalleres();

  }

  cargaTalleres () {
    let params_z = {
      "modo":"buscar_talleres",
      "modo2":"agregar_almacen"
    }
    this.servicioTalleres.buscaTalleres(JSON.stringify(params_z)).subscribe(
      respu => {
        this.talleres = respu;
      }
    )
  }

  agregar() {
    // console.log("mizona:", mizona);
    this.taller = <Taller> {};
    this.taller.idtaller=-1;
    const dlgedit = this.dlgEditTaller.open(DlgedittallerComponent, {
        width: '350px',
        data : JSON.stringify(this.taller)
    });
      dlgedit.afterClosed().subscribe(resultado => {
        if(resultado) {
          console.log("resultado Edit:", resultado);
          this.taller = resultado;
          this.servicioTalleres.agregarTaller(JSON.stringify(this.taller)).subscribe(
            respu => {
              this.cargaTalleres();
            }
          );
        }
       
      });
  }

  modificar (mitaller:Taller) {
  // console.log("mizona:", mizona);
  const dlgedit = this.dlgEditTaller.open(DlgedittallerComponent, {
      width: '350px',
      data : JSON.stringify(mitaller)
  });
    dlgedit.afterClosed().subscribe(resultado => {
      if(resultado) {
        console.log("resultado Edit:", resultado);
        this.taller = resultado;
        this.servicioTalleres.modificarTaller(JSON.stringify(this.taller)).subscribe(
          respu => {
            this.cargaTalleres();
          }
        );
      }
     
    });

  }

  eliminar (mitaller:Taller) {
    const dialogref = this.dialog.open(DialogyesnoComponent, {
      width:'350px',
      data: 'Seguro de Eliminar Taller:' + mitaller.clave + ' ?'
    });
    dialogref.afterClosed().subscribe(resultado => {
      if(resultado) {
        this.servicioTalleres.eliminarTaller(JSON.stringify(mitaller)).subscribe(
          respu => {
            this.cargaTalleres();
          }
        );
      }
     
    });
    
  }

}

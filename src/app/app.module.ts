import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormControl, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZonasComponent } from './zonas/zonas.component';
import { ZonasService } from './services/zonas.service';
import { ConfiguracionService } from './services/configuracion.service';
import { DialogyesnoComponent } from './common/dialogyesno/dialogyesno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { DlgeditzonaComponent } from './zonas/dlgeditzona/dlgeditzona.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ZonasComponent,
    DialogyesnoComponent,
    DlgeditzonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ZonasService,
    ConfiguracionService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogyesnoComponent]

})
export class AppModule { }

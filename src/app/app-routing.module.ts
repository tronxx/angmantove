import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZonasComponent } from './zonas/zonas.component'
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { TalleresComponent } from './talleres/talleres.component';

const routes: Routes = [
  { path: 'zonas', component: ZonasComponent },
  { path: 'almacenes', component: AlmacenesComponent },
  { path: 'talleres', component: TalleresComponent },
  { path: 'ciudades', component: CiudadesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

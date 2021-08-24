import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZonasComponent } from './zonas/zonas.component'

const routes: Routes = [
  { path: 'zonas', component: ZonasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

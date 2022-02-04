import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ConfiguracionService } from './services/configuracion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mantove';

  menus_z = [
    { link: "/zonas", titulo: "Zonas", active:"active" },
    { link: "/almacenes", titulo: "Almacenes", active:"active"  },
    { link: "/ciudades", titulo: "Ciudades", active:"active"  },
    { link: "/talleres", titulo: "Talleres", active:"active"  },
    { link: "/login", titulo: "Acceso", active:""  }
  ];

  constructor( private configuracion: ConfiguracionService) {
    configuracion.obtenconfig();
  }  
 
}


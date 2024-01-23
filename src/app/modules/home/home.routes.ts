
import { RouterModule, Routes } from '@angular/router';
import { GaleriasComponent } from '../galerias/galerias.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { ModelosComponent } from '../modelos/modelos.component';
import { HomeComponent } from './home.component';


export const routes: Routes = [

    {
        path: "",
        component: HomeComponent,
        
      },
        {
        path: "home",
        component: HomeComponent,
        
      },
      
];



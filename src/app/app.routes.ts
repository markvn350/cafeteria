import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { GaleriasComponent } from './modules/galerias/galerias.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { ProcesoComponent } from './modules/proceso/proceso.component';
import { MenuComponent } from './modules/menu/menu.component';
import { ProcesoContentComponent } from './modules/proceso/proceso-content/proceso-content.component';

export const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  
  {
    path: "home",
    component: HomeComponent,
    
  },
  {
    path: "galeria",
    component: GaleriasComponent,
    
  },
  {
    path: "contacto",
    component: ContactoComponent,
    
  },
  {
    path: "nosotros",
    component: NosotrosComponent,
  },
  {
    path: "proceso",
    component: ProcesoComponent,
  },
  {
    path: "menu",
    component: MenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  ubicacion: Array<string> = ["Nicolas Copernico 5990", "Guadalajara, Jalisco"];
  horario: Array<string> = ["Lun-Jue 11:00 - 22:00", "Vie-Sab 09:00 - 24:00", "Domingo: Cerrado"];
  reservacion: Array<string> = ["Tel. 3850-9102", "Llamar"];


  public routes = inject(Router);


  navegacion(nav: string){
    console.log(nav);
    this.routes.navigate(["/", nav]);
  }
}

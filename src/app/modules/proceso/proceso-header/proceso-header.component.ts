import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionService } from 'src/app/shared/services/navegacion.service';

@Component({
  selector: 'app-proceso-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proceso-header.component.html',
  styleUrls: ['./proceso-header.component.scss']
})
export class ProcesoHeaderComponent {
  public _nav = inject(NavegacionService);

 


}

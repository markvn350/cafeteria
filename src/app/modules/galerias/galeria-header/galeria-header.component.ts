import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionService } from 'src/app/shared/services/navegacion.service';

@Component({
  selector: 'app-galeria-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-header.component.html',
  styleUrls: ['./galeria-header.component.scss']
})
export class GaleriaHeaderComponent {
  public _nav = inject(NavegacionService)
}

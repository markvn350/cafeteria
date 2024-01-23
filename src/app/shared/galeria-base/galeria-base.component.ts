import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-base.component.html',
  styleUrls: ['./galeria-base.component.scss']
})
export class GaleriaBaseComponent {
    imagenes = ["01","02","03","04","05","06","07","08","09","10"];
}

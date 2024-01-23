import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionService } from 'src/app/shared/services/navegacion.service';

@Component({
  selector: 'app-contacto-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto-header.component.html',
  styleUrls: ['./contacto-header.component.scss']
})
export class ContactoHeaderComponent {
  public _nav = inject(NavegacionService);
}

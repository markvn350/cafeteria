import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionService } from 'src/app/shared/services/navegacion.service';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent {
  public _nav = inject(NavegacionService)
}

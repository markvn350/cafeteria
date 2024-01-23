import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavegacionService } from 'src/app/shared/services/navegacion.service';

@Component({
  selector: 'app-nosotros-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros-header.component.html',
  styleUrls: ['./nosotros-header.component.scss']
})
export class NosotrosHeaderComponent {
  public _nav = inject(NavegacionService);
}

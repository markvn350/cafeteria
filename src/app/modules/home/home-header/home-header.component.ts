import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionService } from 'src/app/shared/services/navegacion.service';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {
  public _nav = inject(NavegacionService);
  
}


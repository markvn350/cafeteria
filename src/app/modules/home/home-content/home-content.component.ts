import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialesComponent } from "../testimoniales/testimoniales.component";
import { MenuBaseComponent } from "../../../shared/menu-base/menu-base.component";
import { GaleriaBaseComponent } from "../../../shared/galeria-base/galeria-base.component";


@Component({
    selector: 'app-home-content',
    standalone: true,
    templateUrl: './home-content.component.html',
    styleUrls: ['./home-content.component.scss'],
    imports: [CommonModule, TestimonialesComponent, MenuBaseComponent, GaleriaBaseComponent]
})
export class HomeContentComponent {
    imagenes = ["01","02","03","04","05","06","07","08","09","10"];
}

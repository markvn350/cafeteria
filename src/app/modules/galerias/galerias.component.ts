import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaBaseComponent } from "../../shared/galeria-base/galeria-base.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { GaleriaHeaderComponent } from "./galeria-header/galeria-header.component";

@Component({
    selector: 'app-galerias',
    standalone: true,
    templateUrl: './galerias.component.html',
    styleUrls: ['./galerias.component.scss'],
    imports: [CommonModule, GaleriaBaseComponent, FooterComponent, GaleriaHeaderComponent]
})
export class GaleriasComponent {

}

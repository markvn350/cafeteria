import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcesoHeaderComponent } from "./proceso-header/proceso-header.component";
import { ProcesoContentComponent } from "./proceso-content/proceso-content.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-proceso',
    standalone: true,
    templateUrl: './proceso.component.html',
    styleUrls: ['./proceso.component.scss'],
    imports: [CommonModule, ProcesoHeaderComponent, ProcesoContentComponent, FooterComponent]
})
export class ProcesoComponent {

}

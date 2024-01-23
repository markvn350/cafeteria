import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosContentComponent } from "./nosotros-content/nosotros-content.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { NosotrosHeaderComponent } from "./nosotros-header/nosotros-header.component";

@Component({
    selector: 'app-nosotros',
    standalone: true,
    templateUrl: './nosotros.component.html',
    styleUrls: ['./nosotros.component.scss'],
    imports: [CommonModule,  NosotrosContentComponent, FooterComponent, NosotrosHeaderComponent]
})
export class NosotrosComponent {

}

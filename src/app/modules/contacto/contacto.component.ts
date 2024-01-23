import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoHeaderComponent } from "./contacto-header/contacto-header.component";
import { ContactoContentComponent } from "./contacto-content/contacto-content.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-contacto',
    standalone: true,
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.scss'],
    imports: [CommonModule, ContactoHeaderComponent, ContactoContentComponent, FooterComponent]
})
export class ContactoComponent {

}

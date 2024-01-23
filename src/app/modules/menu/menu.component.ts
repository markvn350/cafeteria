import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from "./menu-header/menu-header.component";
import { MenuContentComponent } from "./menu-content/menu-content.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    imports: [CommonModule, MenuHeaderComponent, MenuContentComponent, FooterComponent]
})
export class MenuComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from "./home-header/home-header.component";

import { HomeContentComponent } from "./home-content/home-content.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, HomeHeaderComponent, HomeContentComponent, FooterComponent]
})
export class HomeComponent {

}

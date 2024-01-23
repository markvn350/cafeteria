import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBaseComponent } from "../../../shared/menu-base/menu-base.component";

@Component({
    selector: 'app-menu-content',
    standalone: true,
    templateUrl: './menu-content.component.html',
    styleUrls: ['./menu-content.component.scss'],
    imports: [CommonModule, MenuBaseComponent]
})
export class MenuContentComponent {
    menuContent:string ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt iste inventore eaque quo veritatis quae architecto repellat officiis illo facilis atque, sequi quis fuga quam! Quas recusandae repellendus totam?";
}

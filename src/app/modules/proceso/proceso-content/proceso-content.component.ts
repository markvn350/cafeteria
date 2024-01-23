import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proceso-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proceso-content.component.html',
  styleUrls: ['./proceso-content.component.scss']
})
export class ProcesoContentComponent {
  procesoContent ={
    texto: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis ducimus repellat mollitia tempora, natus inventore quod explicabo, quo accusamus quos debitis delectus. Tempora quibusdam eaque, sed officia atque tenetur.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis ducimus repellat mollitia tempora, natus inventore quod explicabo, quo accusamus quos debitis delectus. Tempora quibusdam eaque, sed officia atque tenetur.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis ducimus repellat mollitia tempora, natus inventore quod explicabo, quo accusamus quos debitis delectus. Tempora quibusdam eaque, sed officia atque tenetur.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis ducimus repellat mollitia tempora, natus inventore quod explicabo, quo accusamus quos debitis delectus. Tempora quibusdam eaque, sed officia atque tenetur.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis ducimus repellat mollitia tempora, natus inventore quod explicabo, quo accusamus quos debitis delectus. Tempora quibusdam eaque, sed officia atque tenetur.",
    ],
    titulo: ["Granos de Café", "Tostar el Café", "Empacar el Café", "Moler granos de Café", "Disfrutar una taza"]
  }
}

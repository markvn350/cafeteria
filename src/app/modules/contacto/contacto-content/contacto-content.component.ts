import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto-content',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto-content.component.html',
  styleUrls: ['./contacto-content.component.scss']
})
export class ContactoContentComponent  implements OnInit {
  formContact: FormGroup = new FormGroup({});

  sendLogin(){
    console.log(this.formContact.value);
  }
  ngOnInit(): void {
    this.formContact = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [
        Validators.email, 
        Validators.required
      ]),
      numero: new FormControl('', [
        Validators.required
      ]),
     
      hora: new FormControl('', [
        Validators.required,
      ]),
      fecha: new FormControl('', [
        Validators.required
      ]),
      
    });
  }
}

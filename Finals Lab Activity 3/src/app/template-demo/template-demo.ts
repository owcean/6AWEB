import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css'
})
export class TemplateDemoComponent {

  username = '';
  email = '';
  password = '';
  role = '';

  gender = '';
  status = '';
  comments = '';

  phone = '';
  dob = '';
  address = '';

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}

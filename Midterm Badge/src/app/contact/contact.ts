import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html'
})
export class Contact {
  name: string = '';
  email: string = '';
  message: string = '';
}

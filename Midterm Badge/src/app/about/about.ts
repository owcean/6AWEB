import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule],
  template: `
    <div class="card">
      <h2><i class="fa fa-info-circle"></i> {{ 'About This Portal' | uppercase }}</h2>
      <p>This is a sample Angular SPA demonstrating routing, shared services, observables, and pipes.</p>
      <hr>
      <p>Today: {{ today | date:'fullDate' }}</p>
    </div>
  `
})
export class About {
  today: Date = new Date();
}

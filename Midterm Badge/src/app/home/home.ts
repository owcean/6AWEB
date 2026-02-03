import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpdeskService, Post } from '../data-service'; // Added Post here
import { Observable } from 'rxjs';
import { TruncatePipe } from '../truncate-pipe';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  posts$: Observable<Post[]> | undefined;

  constructor(private helpdesk: HelpdeskService) {}

  ngOnInit() {
    this.posts$ = this.helpdesk.getLatestUpdates();
  }
}

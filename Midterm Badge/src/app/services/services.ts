import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for [(ngModel)]
import { HelpdeskService, Post } from '../data-service';
import { filter, Observable } from 'rxjs';
import { TruncatePipe } from '../truncate-pipe';
import { FilterPostsPipe } from '../filter-posts-pipe';

@Component({
  standalone: true,
  selector: 'app-services',
  imports: [CommonModule, FormsModule, TruncatePipe, FilterPostsPipe],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services implements OnInit {
  allPosts$: Observable<Post[]> | undefined;
  searchText: string = ''; // Holds the search input

  constructor(private helpdesk: HelpdeskService) {}

  ngOnInit() {
    this.allPosts$ = this.helpdesk.getServices();
  }
}

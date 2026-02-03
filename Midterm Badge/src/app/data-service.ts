import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, map } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class HelpdeskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  // Requirement: Implement basic caching
  private cache$?: Observable<Post[]>;

  constructor(private http: HttpClient) {}

  getServices(): Observable<Post[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<Post[]>(this.apiUrl).pipe(
        shareReplay(1) // Requirement: shareReplay(1) for caching
      );
    }
    return this.cache$;
  }

  getLatestUpdates(): Observable<Post[]> {
    return this.getServices().pipe(
      map(posts => posts.slice(0, 5)) // Requirement: Show latest 5
    );
  }
}

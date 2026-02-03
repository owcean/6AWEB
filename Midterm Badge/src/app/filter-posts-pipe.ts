import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './data-service';

@Pipe({
  name: 'filterPosts',
  standalone: true
})
export class FilterPostsPipe implements PipeTransform {
  transform(posts: Post[] | null, searchText: string): Post[] {
    if (!posts) return [];
    if (!searchText) return posts;

    searchText = searchText.toLowerCase();

    return posts.filter(post =>
      post.title.toLowerCase().includes(searchText) ||
      post.body.toLowerCase().includes(searchText)
    );
  }
}

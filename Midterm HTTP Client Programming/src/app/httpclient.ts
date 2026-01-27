import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import { CartResponse, Cart } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class Httpclient {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsersRemotely(): Observable<User[]> {
    const cachedUsers = localStorage.getItem('users');

    if (cachedUsers) {
      return of(JSON.parse(cachedUsers));
    }

    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(users => localStorage.setItem('users', JSON.stringify(users)))
    );
  }
  getCarts(): Observable<Cart[]> {
  return this.http.get<CartResponse>('https://dummyjson.com/carts').pipe(
    map(response => response.carts.slice(0, 5))
  );
}
}

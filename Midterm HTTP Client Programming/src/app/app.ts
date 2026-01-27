import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { Cart } from './cart.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = () => 'User Directory';
  httpusers: User[] = [];
  httpcarts: Cart[] = [];

  constructor(private service: Httpclient) {}

  ngOnInit() {
    this.service.getUsersRemotely().subscribe((data: User[]) => {
      this.httpusers = data;
    });
    this.service.getCarts().subscribe((data: Cart[]) => {
    this.httpcarts = data;
  });
  }
}

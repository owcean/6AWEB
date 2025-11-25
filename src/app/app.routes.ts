import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'directives', component: Directives},
  {path: 'data-binding', component: DataBinding}
];

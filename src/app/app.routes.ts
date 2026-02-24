import { Routes } from '@angular/router';
import { TemplateDemoComponent } from './template-demo/template-demo';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo';

export const routes: Routes = [
  { path: '', redirectTo: 'template-demo', pathMatch: 'full' },
  { path: 'template-demo', component: TemplateDemoComponent },
  { path: 'reactive-demo', component: ReactiveDemoComponent },
];

import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { Fase2Component } from './pages/fase2/fase2';
import { Fase3Component } from './pages/fase3/fase3';

export const routes: Routes = [
  { path: '', component: Fase2Component },
  { path: 'fase2', component: Fase2Component },
  { path: 'fase3', component: Fase3Component }
];

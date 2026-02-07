import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./componentes/listar-naves/listar-naves.component').then(m => m.ListarNavesComponent) },
  { path: 'nave/:id', loadComponent: () => import('./componentes/detalhes-nave/detalhes-nave.component').then(m => m.DetalhesNaveComponent)}

];

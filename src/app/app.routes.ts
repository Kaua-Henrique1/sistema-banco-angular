import { Routes } from '@angular/router';
import { ListarNavesComponent } from './componentes/listar-naves/listar-naves.component';
import { DetalhesNaveComponent } from './componentes/detalhes-nave/detalhes-nave.component';

export const routes: Routes = [
  { path: '', component: ListarNavesComponent },
  { path: 'nave/:id', component: DetalhesNaveComponent }
];

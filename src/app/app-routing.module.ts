import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuzzleSolverComponent } from './puzzle-solver/puzzle-solver.component';

const routes: Routes = [
  { path: 'puzzle-solver', component: PuzzleSolverComponent },
  { path: '', redirectTo: '/puzzle-solver', pathMatch: 'full' },
  { path: '**', redirectTo: '/puzzle-solver' }, // Wildcard route for 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

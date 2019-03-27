import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './components/battle/battle.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'battle',
    pathMatch: 'full',
  },
  {
    path: 'battle',
    component: BattleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

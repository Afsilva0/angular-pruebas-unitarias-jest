import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateComponent } from './calculate.component';

const routes: Routes = [
  { path: '', redirectTo: 'calculate', pathMatch: 'full' },
  {
    path: 'calculate',
    component: CalculateComponent,
  },
  {
    path: '**',
    redirectTo: 'calculate',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculateRoutingModule {}

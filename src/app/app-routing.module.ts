import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'time',
    pathMatch: 'full'
  },
  {
    path: 'time',
    loadChildren: () => import('./time/time.module').then(m => m.TimeModule)
  },
  {
    path: 'json',
    loadChildren: () => import('./json/json.module').then(m => m.JsonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ingredients2Page } from './ingredients2.page';

const routes: Routes = [
  {
    path: '',
    component: Ingredients2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ingredients2PageRoutingModule {}

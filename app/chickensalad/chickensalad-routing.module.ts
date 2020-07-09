import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChickensaladPage } from './chickensalad.page';

const routes: Routes = [
  {
    path: '',
    component: ChickensaladPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChickensaladPageRoutingModule {}

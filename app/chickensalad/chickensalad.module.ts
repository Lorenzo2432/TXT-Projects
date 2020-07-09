import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChickensaladPageRoutingModule } from './chickensalad-routing.module';

import { ChickensaladPage } from './chickensalad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChickensaladPageRoutingModule
  ],
  declarations: [ChickensaladPage]
})
export class ChickensaladPageModule {}

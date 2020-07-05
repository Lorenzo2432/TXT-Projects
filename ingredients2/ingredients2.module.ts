import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ingredients2PageRoutingModule } from './ingredients2-routing.module';

import { Ingredients2Page } from './ingredients2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ingredients2PageRoutingModule
  ],
  declarations: [Ingredients2Page]
})
export class Ingredients2PageModule {}

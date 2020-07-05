import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmoothiesPageRoutingModule } from './smoothies-routing.module';

import { SmoothiesPage } from './smoothies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmoothiesPageRoutingModule
  ],
  declarations: [SmoothiesPage]
})
export class SmoothiesPageModule {}

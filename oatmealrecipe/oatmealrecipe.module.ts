import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OatmealrecipePageRoutingModule } from './oatmealrecipe-routing.module';

import { OatmealrecipePage } from './oatmealrecipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OatmealrecipePageRoutingModule
  ],
  declarations: [OatmealrecipePage]
})
export class OatmealrecipePageModule {}

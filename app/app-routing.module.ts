import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'recipe',
    loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
  },
  {
    path: 'ingredients',
    loadChildren: () => import('./ingredients/ingredients.module').then( m => m.IngredientsPageModule)
  },
  {
    path: 'stepone',
    loadChildren: () => import('./stepone/stepone.module').then( m => m.SteponePageModule)
  },
  {
    path: 'helpbutton',
    loadChildren: () => import('./helpbutton/helpbutton.module').then( m => m.HelpbuttonPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

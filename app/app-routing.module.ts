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
  },
  {
    path: 'ingredients1',
    loadChildren: () => import('./ingredients1/ingredients1.module').then( m => m.Ingredients1PageModule)
  },
  {
    path: 'ingredients2',
    loadChildren: () => import('./ingredients2/ingredients2.module').then( m => m.Ingredients2PageModule)
  },
  {
    path: 'oatmealrecipe',
    loadChildren: () => import('./oatmealrecipe/oatmealrecipe.module').then( m => m.OatmealrecipePageModule)
  },
  {
    path: 'smoothies',
    loadChildren: () => import('./smoothies/smoothies.module').then( m => m.SmoothiesPageModule)
  },
  {
    path: 'hamsandwich',
    loadChildren: () => import('./hamsandwich/hamsandwich.module').then( m => m.HamsandwichPageModule)
  },
  {
    path: 'chickensalad',
    loadChildren: () => import('./chickensalad/chickensalad.module').then( m => m.ChickensaladPageModule)
  },
  {
    path: 'ingredients3',
    loadChildren: () => import('./ingredients3/ingredients3.module').then( m => m.Ingredients3PageModule)
  },
  {
    path: 'spaghetti',
    loadChildren: () => import('./spaghetti/spaghetti.module').then( m => m.SpaghettiPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

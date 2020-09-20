import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Fried Rice', 'This is a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-fried-rice-009-1543877224.jpg?crop=1xw:1xh;center,top&resize=768:*'),
    new Recipe('Tacos Al Pastor', 'Test', 'https://keviniscooking.com/wp-content/uploads/2017/04/Authentic-Tacos-Al-Pastor-square2.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); 
  }

}
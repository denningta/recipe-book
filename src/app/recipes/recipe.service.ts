import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Fried Rice', 
      'This is a test', 
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-fried-rice-009-1543877224.jpg?crop=1xw:1xh;center,top&resize=768:*',
      [
        new Ingredient('Rice', 1),
        new Ingredient('Peas', 1),
        new Ingredient('Carrots', 2)
      ]
    ),
    new Recipe(
      'Tacos Al Pastor',
      'Test',
      'https://keviniscooking.com/wp-content/uploads/2017/04/Authentic-Tacos-Al-Pastor-square2.jpg',
      [
        new Ingredient('Tortillas', 1),
        new Ingredient('Pork', 1),
        new Ingredient('Pineapple', 1),
        new Ingredient('Cilantro', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); 
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
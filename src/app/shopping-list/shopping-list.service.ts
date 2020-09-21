import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientAdded = new EventEmitter<Ingredient>();
  
  private ingredients: Ingredient[] = [
    new Ingredient('Milk', 1),
    new Ingredient('Eggs', 12),
    new Ingredient('Double Stuff Oreos', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
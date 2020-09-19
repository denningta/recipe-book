import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Fried Rice', 'This is a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-fried-rice-009-1543877224.jpg?crop=1xw:1xh;center,top&resize=768:*'),
    new Recipe('Tacos Al Pastor', 'Test', 'https://keviniscooking.com/wp-content/uploads/2017/04/Authentic-Tacos-Al-Pastor-square2.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }


}

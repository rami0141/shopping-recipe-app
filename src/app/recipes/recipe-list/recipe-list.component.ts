import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //new EventEmitter<Recipe>() passes the recipe that was selected
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  //The only thing saved in this property will be an array - which holds recipe objects
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://get.pxhere.com/photo/dish-meal-food-produce-drink-cuisine-pizza-pepperoni-italian-food-european-food-954587.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://get.pxhere.com/photo/dish-meal-food-produce-drink-cuisine-pizza-pepperoni-italian-food-european-food-954587.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  //which recipe was selected
  onRecipeSelected(recipe: Recipe) {
    //passing the recipe as data
    this.recipeWasSelected.emit(recipe);
  }

}

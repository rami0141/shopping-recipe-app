import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //The only thing saved in this property will be an array - which holds recipe objects
  recipes: Recipe[] = [
    new Recipe(' A Test Recipe', 'This is simply a test', 'https://get.pxhere.com/photo/dish-food-recipe-snack-fast-food-cuisine-sandwich-vegetarian-food-baked-goods-power-supply-junk-food-beirut-mediterranean-food-finger-food-european-food-breakfast-sandwich-american-food-1375814.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

}

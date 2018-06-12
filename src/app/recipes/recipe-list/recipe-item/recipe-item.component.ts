import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //There won't be a value assigned to it because I want to get the recipe from outside
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}

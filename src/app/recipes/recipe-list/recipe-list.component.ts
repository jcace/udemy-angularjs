import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe("eggs", 
			"delicious eggs!", 
			"https://nutritionfacts.org/app/uploads/2017/03/Eggs.jpeg")
	];


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipes';

@Component({
  selector: 'app-read-recipe',
  templateUrl: './read-recipe.component.html',
  styleUrls: ['./read-recipe.component.css']
})
export class ReadRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  recipe: Recipe;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.recipeForm = this.fb.group({
      name: [{value: '', disabled: true}],
      prepTimeMinutes: [{value: '', disabled: true}],
      cookTimeMinutes: [{value: '', disabled: true}],
      cuisine: [{value: '', disabled: true}]
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.recipe = data['recipe'];
      this.recipeForm.patchValue({
        name: this.recipe.name,
        prepTimeMinutes: this.recipe.prepTimeMinutes,
        cookTimeMinutes: this.recipe.cookTimeMinutes,
        cuisine: this.recipe.cuisine
      });
    });
  }
}
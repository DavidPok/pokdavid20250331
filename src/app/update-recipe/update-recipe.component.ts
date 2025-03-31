import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipes';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  recipe: Recipe;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      prepTimeMinutes: ['', [Validators.required, Validators.min(5)]],
      cookTimeMinutes: ['', [Validators.required, Validators.min(5)]],
      cuisine: ['', Validators.required]
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

  onSubmit(): void {
    if (this.recipeForm.valid) {
      console.log('Updated recipe:', this.recipeForm.value);
    }
  }
}
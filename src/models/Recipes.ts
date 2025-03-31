export interface Recipe {
  id: number;
  name: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: string;
  rating: number;
  cuisine: string;
}

export interface RecipeResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}
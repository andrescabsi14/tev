import { Ingredients, Recipe } from "../_model/Recipes.types";

export const formatRecipe = (recipe: any): Recipe => {
  const RECIPE_INGREDIENT = "strIngredient";
  const RECIPE_MEASURE = "strMeasure";

  const keys = Object.keys(recipe);

  const ingredientsKeys = keys.filter((k) => k.match(RECIPE_INGREDIENT));
  const measuresKeys = keys.filter((k) => k.match(RECIPE_MEASURE));

  const ingredients: Ingredients[] = ingredientsKeys
    .map((key, index) => ({
      name: recipe[key],
      measure: recipe[measuresKeys[index]],
    }))
    .filter((ingr) => ingr.name && ingr.measure);

  return {
    id: recipe.idMeal,
    name: recipe.strMeal,
    image: recipe.strMealThumb,
    directions: recipe.strInstructions,
    ingredients,
  };
};

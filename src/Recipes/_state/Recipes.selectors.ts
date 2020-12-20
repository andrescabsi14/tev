import { CoreState } from "../../store/_model/store.types";

export const getRecipe = (state: CoreState, recipeId: string) => {
  const firstRecipe = state.recipes?.ids[0];
  const targetDashboard = recipeId
    ? state.recipes.all[recipeId as any] || { id: recipeId }
    : state.recipes.all[firstRecipe as any];

  return targetDashboard || null;
};

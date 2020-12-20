import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { RecipesState } from "../../Recipes/_model/Recipes.types";

export interface CoreState {
  recipes: RecipesState;
}

export type RecipesThunkDispatch = ThunkDispatch<CoreState, null, Action>;

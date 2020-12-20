export interface Ingredients {
  name: string;
  measure: string;
}
export interface Recipe {
  id: string;
  name: string;
  image: string;
  directions: string;
  ingredients: Ingredients[];
}

interface AllRecipes {
  [id: number]: Recipe;
}

export interface RecipesState {
  loading: boolean;
  ids: string[];
  all: AllRecipes;
  error: string;
  active: string;
}

export enum Actions {
  SET_RECIPES_LOADING = "[RECIPES] SET LOADING",
  ADD_RECIPE = "[RECIPES] ADD",
  UPDATE_RECIPE = "[RECIPES] UPDATE",
  SELECT_RECIPE = "[RECIPES] SELECT_RECIPE",
  SET_RECIPES = "[RECIPES] SET ALL",
  SET_FAVORITE_RECIPE = "[RECIPES] SET FAVORITE",
  FETCHING_RECIPES = "[RECIPES] FETCHING",
  CREATE_RECIPE = "[RECIPES] CREATE",
  EDIT_RECIPE = "[RECIPES] EDIT",
  DELETE_RECIPE = "[RECIPES] DELETE",
}

interface SetRecipeLoading {
  type: typeof Actions.SET_RECIPES_LOADING;
  payload: boolean;
}

interface AddRecipe {
  type: typeof Actions.ADD_RECIPE;
  payload: Recipe;
}

interface UpdateRecipe {
  type: typeof Actions.UPDATE_RECIPE;
  payload: Recipe;
}

interface SelectRecipe {
  type: typeof Actions.SELECT_RECIPE;
  payload: string;
}

interface SetRecipes {
  type: typeof Actions.SET_RECIPES;
  payload: Recipe[];
}

interface SetFavoriteRecipe {
  type: typeof Actions.SET_FAVORITE_RECIPE;
  payload: string;
}

interface FetchingRecipes {
  type: typeof Actions.FETCHING_RECIPES;
  payload: boolean;
}

interface CreateRecipes {
  type: typeof Actions.CREATE_RECIPE;
}

interface EditRecipes {
  type: typeof Actions.EDIT_RECIPE;
  payload: string;
}

interface DeleteRecipe {
  type: typeof Actions.DELETE_RECIPE;
  payload: boolean;
}

export type RecipesActionTypes =
  | SetRecipeLoading
  | AddRecipe
  | UpdateRecipe
  | SelectRecipe
  | SetRecipes
  | SetFavoriteRecipe
  | FetchingRecipes
  | CreateRecipes
  | EditRecipes
  | DeleteRecipe;

export const recipesActionTypes: string[] = Object.values(Actions);

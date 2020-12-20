import APIResquest, { CANCELLED_REQUEST_RESPONSE } from "../../api/index";
import { RecipesThunkDispatch } from "../../store/_model/store.types";
import { Actions } from "../_model/Recipes.types";
import { formatRecipe } from "../_utils/dataFormatting";

export function setRecipesLoading(loading: boolean) {
  return {
    type: Actions.SET_RECIPES_LOADING,
    payload: loading,
  };
}

export function setRecipes(recipes: any[]) {
  return {
    type: Actions.SET_RECIPES,
    payload: recipes,
  };
}

export function addRecipe(recipe: any) {
  return {
    type: Actions.ADD_RECIPE,
    payload: recipe,
  };
}

export const fetchRandomRecipes = (cancelToken: any, recipes: number) => async (
  dispatch: RecipesThunkDispatch
) => {
  try {
    dispatch(setRecipesLoading(true));

    // Not ideal but chaining request with axios.all() didn't worked for me.

    const req1 = await APIResquest({
      cancelToken: cancelToken.token,
      url: `/random.php`,
      method: "get",
    });
    const req2 = await APIResquest({
      cancelToken: cancelToken.token,
      url: `/random.php`,
      method: "get",
    });
    const req3 = await APIResquest({
      cancelToken: cancelToken.token,
      url: `/random.php`,
      method: "get",
    });
    const req4 = await APIResquest({
      cancelToken: cancelToken.token,
      url: `/random.php`,
      method: "get",
    });
    const req5 = await APIResquest({
      cancelToken: cancelToken.token,
      url: `/random.php`,
      method: "get",
    });

    if (req1 && req2 && req3 && req4 && req5) {
      const response = [
        req1.meals[0],
        req2.meals[0],
        req3.meals[0],
        req4.meals[0],
        req5.meals[0],
      ].map((rec) => formatRecipe(rec));

      dispatch(setRecipes(response));
    }
  } catch (error) {
    if (error.message === CANCELLED_REQUEST_RESPONSE) return;
    console.error(error);
  } finally {
    dispatch(setRecipesLoading(false));
  }
};

export const fetchRecipe = (cancelToken: any, recipeId: string) => async (
  dispatch: RecipesThunkDispatch
) => {
  try {
    dispatch(setRecipesLoading(true));

    const { meals } = await APIResquest({
      cancelToken: cancelToken.token,
      url: `/lookup.php?i=${recipeId}`,
      method: "get",
    });
    if (meals) {
      const formatted = formatRecipe(meals[0]);
      dispatch(addRecipe(formatted));
    }
  } catch (error) {
    if (error.message === CANCELLED_REQUEST_RESPONSE) return;
    console.error(error);
  } finally {
    dispatch(setRecipesLoading(false));
  }
};

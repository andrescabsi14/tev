import APIResquest, { CANCELLED_REQUEST_RESPONSE } from "../../api/index";
import { RecipesThunkDispatch } from "../../store/_model/store.types";
import { Actions } from "../_model/Recipes.types";

export function setRecipesLoading(loading: boolean) {
  return {
    type: Actions.SET_RECIPES_LOADING,
    payload: loading,
  };
}

export const fetchRandomRecipes = (cancelToken: any, recipes: number) => async (
  dispatch: RecipesThunkDispatch
) => {
  try {
    dispatch(setRecipesLoading(true));
    const req = await APIResquest({
      cancelToken: cancelToken.token,
      url: `/random.php`,
      method: "get",
    });
    if (req) {
      debugger;
    }
  } catch (error) {
    if (error.message === CANCELLED_REQUEST_RESPONSE) return;
    console.error(error);
  } finally {
    dispatch(setRecipesLoading(false));
  }
};

import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Background from "../../Common/Background/Background.component";
import {
  CoreState,
  RecipesThunkDispatch,
} from "../../store/_model/store.types";
import { fetchRecipe } from "../_state/Recipes.actions";
import { getRecipe } from "../_state/Recipes.selectors";
import { CancelTokenFactory } from "../../api";
import { Recipe } from "../_model/Recipes.types";
import styles from "./Recipe.module.scss";

interface RecipePageProps extends RouteComponentProps<any> {
  loading?: boolean;
  fetchRecipe?: Function;
  recipe?: Recipe | null; // To do: type definition based on API return
}

const RecipePage: React.FC<RecipePageProps> = ({
  loading,
  fetchRecipe,
  recipe,
  match,
}) => {
  const cancelToken: any = useRef(null);

  const cancelPreviousRequest = () => {
    if (cancelToken?.current) cancelToken.current?.cancel();
  };

  const loadRecipe = () => {
    window?.scrollTo(0, 0);
    if (Boolean(recipe?.name)) return;

    try {
      cancelPreviousRequest();
      const requestRef = CancelTokenFactory.tokenRef;
      cancelToken.current = requestRef;

      fetchRecipe && fetchRecipe(requestRef, match.params.id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadRecipe();
  }, []); // eslint-disable-line

  return (
    <div className={styles.wrapper}>
      {loading && (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}
      {!loading && (
        <>
          <div className={styles.image}>
            <Background image={recipe?.image} actionable />
          </div>
          <h3>{recipe?.name}</h3>
          {recipe?.ingredients && (
            <div className={styles.ingredients}>
              <ul>
                {recipe?.ingredients.map((ing) => (
                  <li key={ing.name}>
                    {ing.measure} {ing.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recipe?.directions && (
            <div className={styles.directions}>
              <h3>Directions</h3>
              <ol>
                {recipe.directions &&
                  typeof recipe.directions === "string" &&
                  recipe.directions?.split("\n").map((par) => <li>{par}.</li>)}
              </ol>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: CoreState, props: RecipePageProps) => ({
  loading: state.recipes.loading,
  recipe: getRecipe(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch: RecipesThunkDispatch) => ({
  fetchRecipe(cancelToken: any, recipeId: string) {
    dispatch(fetchRecipe(cancelToken, recipeId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RecipePage));

import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Background from "../../Common/Background/Background.component";
import {
  CoreState,
  RecipesThunkDispatch,
} from "../../store/_model/store.types";
import { fetchRandomRecipes } from "../_state/Recipes.actions";
import BgImage from "../_assets/home-background.jpg";
import Logo from "../../Common/Logo/Logo.component";
import styles from "./Recipes.module.scss";
import { CancelTokenFactory } from "../../api";
import RecipeUnit from "../../Common/Recipe/Recipe.component";
import { isMobile } from "../../App";

interface RecipesPageProps extends RouteComponentProps<any> {
  loading: boolean;
  fetchRecipes?: Function;
  randomRecipes: string[];
  recipesList: any;
}

const RecipesPage: React.FC<RecipesPageProps> = ({
  loading,
  fetchRecipes,
  randomRecipes,
  recipesList,
}) => {
  const cancelToken: any = useRef(null);

  const cancelPreviousRequest = () => {
    if (cancelToken?.current) cancelToken.current?.cancel();
  };

  const loadRandomRecipes = () => {
    try {
      cancelPreviousRequest();
      const requestRef = CancelTokenFactory.tokenRef;
      cancelToken.current = requestRef;

      fetchRecipes && fetchRecipes(requestRef, 5);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadRandomRecipes();
  }, []); // eslint-disable-line

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <NavLink to="/">
          <Logo
            width={isMobile ? `120px` : `150px`}
            height={isMobile ? `120px` : `150px`}
          />
        </NavLink>
        <Background image={BgImage} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Recipes of the day</h3>

        {loading && (
          <div className={styles.loading}>
            <CircularProgress />
          </div>
        )}

        {!loading && !randomRecipes.length && <p>No recipes available</p>}

        <div className={styles.list}>
          {!loading &&
            randomRecipes.map((recipeId: string) => (
              <RecipeUnit key={recipeId} data={recipesList[recipeId as any]} />
            ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: CoreState, props: RecipesPageProps) => ({
  loading: state.recipes.loading,
  randomRecipes: state.recipes.ids,
  recipesList: state.recipes.all,
});

const mapDispatchToProps = (dispatch: RecipesThunkDispatch) => ({
  fetchRecipes(cancelToken: any, recipes: number) {
    dispatch(fetchRandomRecipes(cancelToken, recipes));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RecipesPage));

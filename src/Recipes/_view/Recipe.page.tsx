import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  CoreState,
  RecipesThunkDispatch,
} from "../../store/_model/store.types";
import { fetchRandomRecipes } from "../_state/Recipes.actions";
import styles from "./Recipes.module.scss";

interface RecipePageProps extends RouteComponentProps<any> {}

const RecipePage: React.FC<RecipePageProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div>RecipePage</div>
    </div>
  );
};

const mapStateToProps = (state: CoreState, props: RecipePageProps) => ({
  loading: state.recipes.loading,
});

const mapDispatchToProps = (dispatch: RecipesThunkDispatch) => ({
  fetchRecipes(cancelToken: any, recipes: number) {
    dispatch(fetchRandomRecipes(cancelToken, recipes));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RecipePage));

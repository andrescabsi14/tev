import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  CoreState,
  RecipesThunkDispatch,
} from "../../store/_model/store.types";
import { fetchRandomRecipes } from "../_state/Recipes.actions";
import styles from "./Recipes.module.scss";

interface RecipesPageProps extends RouteComponentProps<any> {}

const RecipesPage: React.FC<RecipesPageProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div>RecipesPage</div>
    </div>
  );
};

const mapStateToProps = (state: CoreState, props: RecipesPageProps) => ({
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
)(withRouter(RecipesPage));

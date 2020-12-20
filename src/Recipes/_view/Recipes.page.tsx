import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Background from "../../Common/Background/Background.component";
import {
  CoreState,
  RecipesThunkDispatch,
} from "../../store/_model/store.types";
import { fetchRandomRecipes } from "../_state/Recipes.actions";
import BgImage from "../_assets/home-background.jpg";
import Logo from "../../Common/Logo/Logo.component";
import styles from "./Recipes.module.scss";

interface RecipesPageProps extends RouteComponentProps<any> {}

const RecipesPage: React.FC<RecipesPageProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <Logo width={`150px`} height={`150px`} />
        <Background image={BgImage} />
      </div>
      <div className={styles.content}>RecipesPage</div>
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

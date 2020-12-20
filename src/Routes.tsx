import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Common/Header/Header.component";

const RecipesPage = React.lazy(() => import("./Recipes/_view/Recipes.page"));
const RecipePage = React.lazy(() => import("./Recipes/_view/Recipe.page"));

const AppRoutes = () => {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <RecipesPage {...props} />}
          />
          <Route
            exact
            path="/recipe/:id"
            render={(props) => <RecipePage {...props} />}
          />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default AppRoutes;

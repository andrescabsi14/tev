import React from "react";
import { NavLink } from "react-router-dom";
import { Recipe } from "../../Recipes/_model/Recipes.types";
import Background from "../Background/Background.component";
import styles from "./Recipe.module.scss";

interface RecipeUnitProps {
  detail?: boolean;
  data: Recipe;
}

const RecipeUnit: React.FC<RecipeUnitProps> = ({ detail, data }) => {
  return (
    <div className={styles.wrapper}>
      <NavLink to={`/recipe/${data.id}`}>
        <h3>{data.name}</h3>
        <div className={styles.image}>
          <Background image={data.image} />
        </div>
      </NavLink>
    </div>
  );
};

export default React.memo(RecipeUnit);

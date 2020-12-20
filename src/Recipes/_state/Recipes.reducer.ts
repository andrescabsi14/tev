import { cloneDeep } from "lodash";
import {
  RecipesState,
  RecipesActionTypes,
  Actions,
} from "../_model/Recipes.types";
import { arrToEntitiesObj } from "../../utils/entities.util";

const initialStateBase: RecipesState = {
  loading: true,
  error: "",
  ids: [],
  all: {},
  active: "",
};

const initialState = cloneDeep(initialStateBase);

export default function Recipes(
  state = initialState,
  action: RecipesActionTypes
) {
  switch (action.type) {
    case Actions.SET_RECIPES_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case Actions.ADD_RECIPE: {
      return {
        ...state,
        ids: [...state.ids, action.payload.id],
        all: { ...state.all, [action.payload.id]: { ...action.payload } },
      };
    }

    case Actions.UPDATE_RECIPE: {
      const updatedIds = [...state.ids].filter(
        (id) => id !== action.payload.id
      );
      const updatedRecipes = { ...state.all };
      delete updatedRecipes[action.payload.id as any];
      return {
        ...state,
        ids: [...updatedIds, action.payload.id],
        all: {
          ...updatedRecipes,
          [action.payload.id as string]: { ...action.payload },
        },
      };
    }

    case Actions.SELECT_RECIPE: {
      return {
        ...state,
        active: action.payload,
      };
    }
    case Actions.SET_RECIPES: {
      const entityObj = arrToEntitiesObj(action.payload);
      return {
        ...state,
        ids: [...Object.keys(entityObj)],
        all: { ...entityObj },
      };
    }

    case Actions.EDIT_RECIPE: {
      return {
        ...state,
        active: action.payload,
      };
    }
    case Actions.DELETE_RECIPE: {
      const updatedRecipes = { ...state.all };
      delete updatedRecipes[action.payload as any];
      return {
        ...state,
        ids: state.ids.filter((rID) => rID !== (action.payload as any)),
        all: updatedRecipes,
      };
    }

    default: {
      return state;
    }
  }
}

import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const prodMiddlewares = [thunk];
const devMiddlewares = [thunk, logger];
const composeEnhancers =
  ((window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) ||
  compose;
let ReduxStore = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(...devMiddlewares))
);

if (process.env.NODE_ENV !== "development") {
  ReduxStore = createStore(reducers, {}, applyMiddleware(...prodMiddlewares));
}

export default ReduxStore;

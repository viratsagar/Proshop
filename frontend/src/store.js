import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import {
  productListReducer,
  productDetailReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
});
const initialState = {};
const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

const preloadedState = {};

const store = configureStore({
  reducer,
  initialState,
  preloadedState,
  middleware: [thunk],
});

export default store;

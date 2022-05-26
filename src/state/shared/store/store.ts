// Necessities and accessories for constructing our Redux store
import { combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// Individual reducers altogether under an alias
import * as reducers from "../../reducers";
import { configureStore } from "@reduxjs/toolkit";

// Construct our Redux store
const rootReducer = combineReducers(reducers);
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);
export const store = configureStore({ reducer: rootReducer });

// Export our store by default, which will be provided to and injected within our entire application
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


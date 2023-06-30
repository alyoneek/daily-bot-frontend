import { AnyAction, Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { api } from "@/services/api";
import { projectsReducer } from "./projects/projectsSlice";
import { usersReducer } from "./users/usersSlice";

const combinedReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  [api.reducerPath]: api.reducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "clearState") {
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

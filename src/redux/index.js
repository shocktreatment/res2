import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth/auth-slice";
import todoReducer from "./todos/todoSlice";
import { contactsReducer } from "./contacts/contacts-slice";
import { filterReducer } from "./filter/filter-slice";
import { filtersReducer } from "./todos/filterSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todoReducer,
  contacts: contactsReducer,
  filter: filterReducer,
  filters: filtersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  //   whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

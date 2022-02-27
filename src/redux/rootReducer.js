import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mainReducer from "./main/mainReducer";
import preferencesReducer from "./prefernces/preferencesReducer";
import requestsStatusReducer from "./requestsStatus/requsetsStatusReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites", "preferences"],
};
const mainStatePersistConfig = {
  key: "main",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  main: persistReducer(mainStatePersistConfig, mainReducer),
  requsetsStatus: requestsStatusReducer,
  preferences: preferencesReducer,
});

export default persistReducer(persistConfig, rootReducer);

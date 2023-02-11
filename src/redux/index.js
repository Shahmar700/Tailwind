import { combineReducers, legacy_createStore } from "redux";
import dataReducer from "./dataReducer";

const reducer = combineReducers({
  dataReducer,
});

const configureStore = () => {
  return legacy_createStore(reducer);
};

export default configureStore;

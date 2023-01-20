import { combineReducers, createStore } from "redux";
import Reducer1 from "./Reducers/Reducer1";

const rootReducer = combineReducers({
    Reducer1
})

const store = createStore(rootReducer);

export default store;


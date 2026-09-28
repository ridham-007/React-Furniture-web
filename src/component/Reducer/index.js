import { createStore, combineReducers } from "redux";
import initialData from "./initialData";
import { categoryReducer } from "./reducers";
import { addPathReducer } from "./reducers";
import { setCategoryDataReducer } from "./reducers";

const reducers = combineReducers({
    selectedCaterory: categoryReducer,
    addPathName: addPathReducer,
    setCategoryData: setCategoryDataReducer,
});

export default createStore(
    (state, action) => reducers(state, action),
    initialData
);
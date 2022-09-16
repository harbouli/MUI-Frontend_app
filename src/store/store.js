import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import UserReducer from "./reducers/User";

const rootReducer = combineReducers({User: UserReducer});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;

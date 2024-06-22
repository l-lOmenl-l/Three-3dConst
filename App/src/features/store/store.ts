import { createStore } from "redux";

import Reducer from "./reducer";
import initialState from './initialState'


const store = createStore(Reducer,initialState);

export default store
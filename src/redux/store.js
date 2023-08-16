import { createStore } from "redux";
import BirdReducer from "./reducer";

const store = createStore(BirdReducer);

export default store;

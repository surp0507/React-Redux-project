import { createStore } from "redux";
import userReducer from "./rootReducer";

const store = createStore(userReducer);
export default store;
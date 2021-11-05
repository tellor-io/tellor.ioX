import { combineReducers } from "redux";
import prices from "./prices";
import strapiData from "./strapiData";

//combine all reducers
export default combineReducers({ prices, strapiData });

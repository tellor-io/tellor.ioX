import { combineReducers } from "redux";
import prices from "./prices";
import strapiData from "./strapiData";
import miscApiCalls from "./miscApiCalls";

//combine all reducers
export default combineReducers({ prices, strapiData, miscApiCalls });

import { combineReducers } from "redux";
import prices from "./prices";
import strapiData from "./strapiData";
import miscApiCalls from "./miscApiCalls";
import graphEvents from "./graphEvents";

//combine all reducers
export default combineReducers({
  prices,
  strapiData,
  miscApiCalls,
  graphEvents,
});

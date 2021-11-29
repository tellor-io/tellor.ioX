import {
  getPricesRequest,
  getPricesSuccess,
  getPricesFailure,
} from "../actions";

import { chains } from "../../utils/chains";

export const getPrices = (network) => (dispatch) => {
  try {
    //dispatch request
    dispatch(getPricesRequest());
    //fetch data
    // fetch(chains[network].apiURL + "/prices")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     //dispatch success
    //     dispatch(getPricesSuccess(data));
    //   });
  } catch (e) {
    console.error("error", e);
    //dispatch error
    dispatch(getPricesFailure(e));
  }
};

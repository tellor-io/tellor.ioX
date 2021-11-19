import React, { Fragment, useState, useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import Routes from "./Routes";
import HeaderNav from "components/shared/HeaderNav/HeaderNav";
import Footer from "components/shared/Footer/Footer";
import GraphFetch from "components/shared/GraphFetch";
import { NetworkContext } from "contexts/Network";
import { GET_ALL_EVENTS } from "utils/queries";
import { GET_VOTING } from "utils/queries";

import { UserContext } from "contexts/User";

import { connect } from "react-redux";
import {
  getPrices,
  getStrapiData,
  getCoinGeckoPrice,
  getGithubInfo,
  getTwitterInfo,
} from "redux/thunks";

const App = (props) => {
  const [events, setEvents] = useState();
  const [votes, setVotes] = useState();
  const [currentNetwork] = useContext(NetworkContext);
  const [disputes, setDisputes] = useState();
  const [disputesReady, setDisputesReady] = useState(false);

  const [currentUser] = useContext(UserContext);
  //redux variables, thunk methods
  const {
    prices,
    startGetPrices,
    startStrapiData,
    startCoinGecko,
    startGitHub,
    startTwitter,
  } = props;

  useEffect(() => {
    startGetPrices(currentNetwork);
    startStrapiData();
    startCoinGecko();
    startGitHub();
    startTwitter();
  }, [currentNetwork]);

  useEffect(() => {
    if (votes && votes.disputes) {
      let count = 0;
      votes.disputes.forEach((v, i) => {
        if (v.inVoteWindow) {
          count = count + 1;
        }
      });
      setDisputes(votes.disputes);
      setDisputesReady(true);
    } else {
      setDisputesReady(true);
    }
  }, [votes, currentUser]);

  console.log("events:::", events);
  console.log("prices:::", prices);
  console.log("disputes:::", disputes);

  return (
    <>
      <Fragment>
        <Helmet defaultTitle="Tellor Scan">
          <meta name="description" content="Tellor Scan" />
        </Helmet>
        <Router>
          <HeaderNav />
          <Routes />
          <Footer />
        </Router>
      </Fragment>
      <GraphFetch query={GET_ALL_EVENTS} setRecords={setEvents} />
      <GraphFetch
        query={GET_VOTING}
        setRecords={setVotes}
        suppressLoading={true}
      />
    </>
  );
};

//redux state variables
const mapStateToProps = (state) => ({
  prices: state.prices.data,
});
//redux thunk methods (api)
const mapDispatchToProps = (dispatch) => ({
  startGetPrices: (network) => dispatch(getPrices(network)),
  startStrapiData: () => dispatch(getStrapiData()),
  startCoinGecko: () => dispatch(getCoinGeckoPrice()),
  startGitHub: () => dispatch(getGithubInfo()),
  startTwitter: () => dispatch(getTwitterInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

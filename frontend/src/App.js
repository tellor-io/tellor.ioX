import React, { Fragment, useState, useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import Routes from "./Routes";
import HeaderNav from "components/shared/HeaderNav/HeaderNav";
import Footer from "components/shared/Footer/Footer";
import GraphFetch from "components/shared/GraphFetch";
import { NetworkContext } from "contexts/Network";
import { UserContext } from "contexts/User";
import { GET_ALL_REPORTER_EVENTS } from "utils/queries";
import { ApolloClient, useQuery } from "@apollo/client";
import { cache } from "utils/cache";
import { chains } from "utils/chains";

import { connect } from "react-redux";
import {
  getPrices,
  getStrapiData,
  getCoinGeckoPrice,
  getGithubInfo,
  getTwitterInfo,
  getEvents,
} from "redux/thunks";

let clientM = new ApolloClient({
  uri: chains[1].subgraphURL,
  cache: cache,
});
let clientR = new ApolloClient({
  uri: chains[4].subgraphURL,
  cache: cache,
});

const App = (props) => {
  const [events, setEvents] = useState();
  const [votes, setVotes] = useState();
  const [currentNetwork] = useContext(NetworkContext);
  const [disputes, setDisputes] = useState();
  const [disputesReady, setDisputesReady] = useState(false);

  const [currentUser] = useContext(UserContext);

  const { loading, error, data } = useQuery(GET_ALL_REPORTER_EVENTS, {
    client: +currentNetwork === 1 ? clientM : clientR,
    fetchPolicy: "network-only",
    pollInterval: 5000,
  });

  //redux variables, thunk methods
  const {
    prices,
    startGetPrices,
    startStrapiData,
    startCoinGecko,
    startGitHub,
    startTwitter,
    startGetEvents,
  } = props;

  useEffect(() => {
    startStrapiData();
    startCoinGecko();
    startGitHub();
    startTwitter();
  }, []);

  useEffect(() => {
    startGetPrices(currentNetwork);
    startGetEvents(loading, error, data);
  }, [currentNetwork, data]);

  // useEffect(() => {
  //   if (votes && votes.disputes) {
  //     let count = 0;
  //     votes.disputes.forEach((v, i) => {
  //       if (v.inVoteWindow) {
  //         count = count + 1;
  //       }
  //     });
  //     setDisputes(votes.disputes);
  //     setDisputesReady(true);
  //   } else {
  //     setDisputesReady(true);
  //   }
  // }, [votes, currentUser]);

  // console.log("events:::", events);
  // console.log("prices:::", prices);
  // console.log("disputes:::", disputes);

  return (
    <>
      <Fragment>
        <Helmet defaultTitle="Tellor">
          <meta name="description" content="Tellor" />
        </Helmet>
        <Router>
          <HeaderNav />
          <Routes />
          <Footer />
        </Router>
      </Fragment>
      {/* <GraphFetch query={GET_ALL_REPORTER_EVENTS} setRecords={setEvents} /> */}
      {/* <GraphFetch
        query={GET_VOTING}
        setRecords={setVotes}
        suppressLoading={true}
      /> */}
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
  startGetEvents: (loading, error, data) =>
    dispatch(getEvents(loading, error, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Fragment, useState, useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import Routes from "./Routes";
import HeaderNav from "components/shared/HeaderNav/HeaderNav";
import Footer from "components/shared/Footer/Footer";
import GraphFetch from "components/shared/GraphFetch";
import { NetworkContext } from "contexts/Network";
import { UserContext } from "contexts/User";
import { GET_ALL_REPORTER_EVENTS, GET_ALL_VOTE_EVENTS } from "utils/queries";
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
  getVotes,
} from "redux/thunks";

//Graph Reporter Event Apollo Queries
let clientMEvents = new ApolloClient({
  uri: chains[1].subgraphEventsURL,
  cache: cache,
});
let clientREvents = new ApolloClient({
  uri: chains[4].subgraphEventsURL,
  cache: cache,
});
//Graph Vote Event Apollo Queries
let clientMVote = new ApolloClient({
  uri: chains[1].subgraphVotesURL,
  cache: cache,
});
let clientRVote = new ApolloClient({
  uri: chains[4].subgraphVotesURL,
  cache: cache,
});

const App = (props) => {
  // const [events, setEvents] = useState();
  // const [votes, setVotes] = useState();
  const [currentNetwork] = useContext(NetworkContext);
  // const [disputes, setDisputes] = useState();
  // const [disputesReady, setDisputesReady] = useState(false);

  const [currentUser] = useContext(UserContext);

  const eventsData = useQuery(GET_ALL_REPORTER_EVENTS, {
    client: +currentNetwork === 1 ? clientMEvents : clientREvents,
    fetchPolicy: "network-only",
    pollInterval: 5000,
  });

  const votesData = useQuery(GET_ALL_VOTE_EVENTS, {
    client: +currentNetwork === 1 ? clientMVote : clientRVote,
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
    startGetVotes,
  } = props;

  useEffect(() => {
    startStrapiData();
    startCoinGecko();
    startGitHub();
    startTwitter();
  }, []);

  useEffect(() => {
    console.log(currentNetwork);
    startGetPrices(currentNetwork);
    startGetEvents(eventsData.loading, eventsData.error, eventsData.data);
    startGetVotes(votesData.loading, votesData.error, votesData.data);
  }, [currentNetwork, eventsData.data, votesData.data]);

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
  startGetVotes: (loading, error, data) =>
    dispatch(getVotes(loading, error, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { useContext, useEffect } from "react";
import { ApolloClient, useQuery } from "@apollo/client";

import { cache } from "utils/cache";
import { chains } from "utils/chains";
import { NetworkContext } from "contexts/Network";

import { psrLookup } from "../../utils/psrLookup";
import Web3 from "web3";

let clientM = new ApolloClient({
  uri: chains[1].subgraphURL,
  cache: cache,
});
let clientR = new ApolloClient({
  uri: chains[4].subgraphURL,
  cache: cache,
});

const GraphFetch = ({ query, setRecords, variables, suppressLoading }) => {
  const web3 = new Web3(window.ethereum);
  const [currentNetwork] = useContext(NetworkContext);
  //Make sure you're on the right network before
  //flipping out about 'Error: Query doesn't have
  //reportEntities' etc....
  console.log(currentNetwork);
  const { loading, error, data } = useQuery(query, {
    client: +currentNetwork === 1 ? clientM : clientR,
    variables,
    fetchPolicy: "network-only",
    pollInterval: 5000,
  });

  useEffect(() => {
    const getEvents = () => {
      if (data && data.reportEntities) {
        let newEvents = data.reportEntities.map((event) => {
          let clone = JSON.parse(JSON.stringify(event));
          clone.realValue = parseInt(Number(event._value), 10);
          clone.queryData = JSON.parse(JSON.stringify(clone._queryData));
          clone._reporter = web3.utils.toChecksumAddress(clone._reporter);
          try {
            clone.realQueryData = JSON.parse(clone.queryData);
          } catch (err) {
            console.log(err);
          }
          if (
            clone.realQueryData &&
            clone.realQueryData.type === "LegacyRequest"
          ) {
            clone.realQueryData.legacy_name =
              psrLookup[clone.realQueryData.legacy_id].name;
          } else if (
            clone.realQueryData &&
            clone.realQueryData.type === "CoinPrice"
          ) {
            clone.realQueryData.price_type =
              clone.realQueryData.price_type.charAt(0).toUpperCase() +
              clone.realQueryData.price_type.slice(1);
            clone.realQueryData.name = `${
              clone.realQueryData.price_type
            } ${clone.realQueryData.coin.toUpperCase()}/${clone.realQueryData.currency.toUpperCase()}`;
          } else {
            clone.realQueryData = {};
            clone.realQueryData.name = "N/A";
          }

          return clone;
        });
        setRecords(newEvents);
      }
    };
    getEvents();
  }, [data]);

  if (loading) return <>{!suppressLoading ? <p>Load</p> : null}</>;
  if (error) console.log("error", error);

  return <></>;
};

export default GraphFetch;

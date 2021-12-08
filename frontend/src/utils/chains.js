export const chains = {
  1: {
    network: "mainnet",
    subgraphEventsURL:
      "https://api.thegraph.com/subgraphs/name/joshuasamaniego/tellorx-mh-oracle",
    subgraphVotesURL:
      "https://api.thegraph.com/subgraphs/name/joshuasamaniego/tellorx-mh-gov",
    apiURL: "http://api.tellorscan.com/mainnet",
    contractAddr: "0xe8218cACb0a5421BC6409e498d9f8CC8869945ea",
  },
  4: {
    network: "rinkeby",
    subgraphEventsURL:
      "https://api.thegraph.com/subgraphs/name/joshuasamaniego/tellorx-rh-oracle",
    subgraphVotesURL:
      "https://api.thegraph.com/subgraphs/name/joshuasamaniego/tellorx-rh-gov",
    apiURL: "http://api.tellorscan.com/rinkeby",
    contractAddr: "0x18431fd88adF138e8b979A7246eb58EA7126ea16",
  },
};

export default chains;

import { gql } from "@apollo/client";

////LEGACY GRAPHQL QUERIES FROM TELLORSCAN

export const GET_LATEST_MINER_VALUES = gql`
  query {
    minerValues(first: 6, orderBy: timestamp, orderDirection: desc) {
      id
      miningEventId
      currentChallenge
      miner
      values
      requestIds
      requestSymbols @client
      granPrices @client
    }
  }
`;

const eventFields = `
  id
  timestamp
  requestIds
  minedValues
  totalTips
  blockNumber
  requestSymbols @client
  status @client
  inDisputeWindow @client
  granPrices @client
  minerValues {
    id
    miner
    values
  }
`;

export function GET_LATEST_EVENTS_BY_ID(id) {
  return gql`
  query {
    miningEvents(first: 50, orderBy: timestamp, orderDirection: desc, where: { requestIds_contains: [${id}] }) {
      ${eventFields}
    }
  }
`;
}

export const GET_LATEST_EVENTS = gql`
  query {
    miningEvents(first: 6, orderBy: timestamp, orderDirection: desc) {
      ${eventFields}
    }
  }
`;

export const GET_ALL_EVENTS = gql`
  query {
    miningEvents(first: 50, orderBy: timestamp, orderDirection: desc) {
      ${eventFields}
    }
  }
`;

const disputeFields = `
  id
  timestamp
  reportedMiner
  miner
  result
  reportingParty
  active
  requestId
  disputeId
  relatedMiningEventData
  tally
  result
  disputeVotePassed
  active
  value @client
  requestSymbol @client
  status @client
  inVoteWindow @client
  votes {
    id
    position
    voter
    timestamp
  }
`;

export const GET_OPEN_DISPUTES = gql`
  query {
    disputes(where : { active: null, requestId_gt: 0}, orderBy: timestamp, orderDirection: desc) {
      ${disputeFields}
    }
  }
`;

export const GET_VOTING = gql`
  query {
    disputes(first: 50, orderBy: timestamp, orderDirection: desc) {
      ${disputeFields}
    }
  }
`;

const voteFields = `
  disputeId
  timestamp
  voter
  voteWeight
  position
`;

export const GET_VOTES = gql`
query {
  votes(orderBy: timestamp, orderDirection: desc) {
    ${voteFields}
  }
}
`;

////NEW GRAPHQL QUERIES

export const GET_ALL_REPORTER_EVENTS = gql`
  {
    reportEntities(orderBy: _time, orderDirection: desc) {
      id
      _nonce
      _queryData
      _queryId
      _reward
      _time
      _value
      _reporter
    }
  }
`;

export const GET_ALL_VOTE_EVENTS = gql`
  {
    delegateSetEntities(orderBy: timestamp, orderDirection: desc) {
      id
      _delegate
      _delegator
      timestamp
    }
    newDisputeEntities(orderBy: timestamp, orderDirection: desc) {
      id
      _disputeId
      _queryId
      timestamp
      disputeIdentifierHash
      voteRound
      voteStartDate
      blockNumber
      disputeFee
      tallyDate
      votesSupporting
      votesAgainst
      votesForInvalid
      voteExecuted
      voteIsDispute
      voteResult
      voteProposalArgs
      voteProposalMethod
      voteProposalDestinationAddress
      voteProposalCreatorAddress
    }
    newVoteEntities(orderBy: timestamp, orderDirection: desc) {
      id
      _contract
      _function
      _data
      _disputeId
      timestamp
      disputeIdentifierHash
      voteRound
      voteStartDate
      blockNumber
      disputeFee
      tallyDate
      votesSupporting
      votesAgainst
      votesForInvalid
      voteExecuted
      voteIsDispute
      voteResult
      voteProposalArgs
      voteProposalMethod
      voteProposalDestinationAddress
      voteProposalCreatorAddress
    }
    newVoteExecutedEntities(orderBy: timestamp, orderDirection: desc) {
      id
      _disputeId
      _result
      timestamp
      disputeIdentifierHash
      voteRound
      voteStartDate
      blockNumber
      disputeFee
      tallyDate
      votesSupporting
      votesAgainst
      votesForInvalid
      voteExecuted
      voteIsDispute
      voteResult
      voteProposalArgs
      voteProposalMethod
      voteProposalDestinationAddress
      voteProposalCreatorAddress
    }
    newVoteTalliedEntities(orderBy: timestamp, orderDirection: desc) {
      id
      _disputeId
      _result
      _initiator
      _reporter
      timestamp
      disputeIdentifierHash
      voteRound
      voteStartDate
      blockNumber
      disputeFee
      tallyDate
      votesSupporting
      votesAgainst
      votesForInvalid
      voteExecuted
      voteIsDispute
      voteResult
      voteProposalArgs
      voteProposalMethod
      voteProposalDestinationAddress
      voteProposalCreatorAddress
    }
    votedEntities(orderBy: timestamp, orderDirection: desc) {
      id
      _disputeId
      _supports
      _voter
      _voteWeight
      _invalidQuery
      timestamp
      disputeIdentifierHash
      voteRound
      voteStartDate
      blockNumber
      disputeFee
      tallyDate
      votesSupporting
      votesAgainst
      votesForInvalid
      voteExecuted
      voteIsDispute
      voteResult
      voteProposalArgs
      voteProposalMethod
      voteProposalDestinationAddress
      voteProposalCreatorAddress
    }
  }
`;

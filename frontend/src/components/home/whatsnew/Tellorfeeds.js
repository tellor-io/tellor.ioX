import React from "react";
import { ReactComponent as Github } from "assets/Github.svg";
import { ReactComponent as Twitter } from "assets/Twitter.svg";
//Redux
import { useSelector } from "react-redux";
//Helpers
import { formatDate, formatEvent } from "./whatsnewhelpers";

export default function Tellorfeeds() {
  const mostRecentGithubEvent = useSelector(
    (state) => state.miscApiCalls.githubData
  );
  const githubrepo = mostRecentGithubEvent && mostRecentGithubEvent.repo.name;

  return (
    <div className="Tellorfeeds">
      <div className="Tellorfeed Tellorfeed__github">
        <div className="Tellorfeed__icon">
          <a
            href={"http://github.com/" + githubrepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
        <div className="Tellorfeed__txt">
          <a
            href={"http://github.com/" + githubrepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubrepo}
          </a>
          <p className="bold">
            {mostRecentGithubEvent &&
              `
            ${mostRecentGithubEvent.actor.login} -
            ${formatDate(mostRecentGithubEvent.created_at)}`}
          </p>
          <p>
            {mostRecentGithubEvent &&
              `${
                mostRecentGithubEvent.payload.action
                  ? mostRecentGithubEvent.payload.action
                      .charAt(0)
                      .toUpperCase() +
                    mostRecentGithubEvent.payload.action.slice(1)
                  : ""
              } ${formatEvent(mostRecentGithubEvent.type)} ${
                mostRecentGithubEvent.payload.ref_type
                  ? `- ${
                      mostRecentGithubEvent.payload.ref
                        .charAt(0)
                        .toUpperCase() +
                      mostRecentGithubEvent.payload.ref.slice(1)
                    } ${
                      mostRecentGithubEvent.payload.ref_type
                        .charAt(0)
                        .toUpperCase() +
                      mostRecentGithubEvent.payload.ref_type.slice(1)
                    }`
                  : ""
              } ${
                mostRecentGithubEvent.payload.pull_request
                  ? `#${mostRecentGithubEvent.payload.pull_request.number} from ${mostRecentGithubEvent.payload.pull_request.user.login}`
                  : ""
              }`}
          </p>
        </div>
      </div>
      <div className="Tellorfeed Tellorfeed__twitter">
        <div className="Tellorfeed__icon">
          <a
            href="http://twitter.com/wearetellor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </div>
        <div className="Tellorfeed__txt">
          <p>
            <a
              href="http://twitter.com/wearetellor"
              target="_blank"
              rel="noopener noreferrer"
            >
              @WeAreTellor
            </a>{" "}
            - 6 sept
          </p>
          <p>gm tellor community🌞, ...</p>
        </div>
      </div>
    </div>
  );
}

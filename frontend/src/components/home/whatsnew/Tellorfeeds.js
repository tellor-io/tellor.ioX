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
  //console.log("GITHUB EVENTS FROM TELLORFEEDS.JS", mostRecentGithubEvent);
  const githubrepo =
    mostRecentGithubEvent.length > 1 && mostRecentGithubEvent[0].repo.name;

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
            {mostRecentGithubEvent.length > 1 &&
              `
            ${mostRecentGithubEvent[0].actor.login} -
            ${formatDate(mostRecentGithubEvent[0].created_at)}`}
          </p>
          <p>
            {mostRecentGithubEvent.length > 1 &&
              `${
                mostRecentGithubEvent[0].payload.action
                  ? mostRecentGithubEvent[0].payload.action
                      .charAt(0)
                      .toUpperCase() +
                    mostRecentGithubEvent[0].payload.action.slice(1)
                  : ""
              } ${formatEvent(mostRecentGithubEvent[0].type)} ${
                mostRecentGithubEvent[0].payload.ref_type
                  ? `- ${
                      mostRecentGithubEvent[0].payload.ref
                        .charAt(0)
                        .toUpperCase() +
                      mostRecentGithubEvent[0].payload.ref.slice(1)
                    } ${
                      mostRecentGithubEvent[0].payload.ref_type
                        .charAt(0)
                        .toUpperCase() +
                      mostRecentGithubEvent[0].payload.ref_type.slice(1)
                    }`
                  : ""
              } ${
                mostRecentGithubEvent[0].payload.pull_request
                  ? `#${mostRecentGithubEvent[0].payload.pull_request.number} from ${mostRecentGithubEvent[0].payload.pull_request.user.login}`
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

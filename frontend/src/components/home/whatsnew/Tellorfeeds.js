import React, { useRef, useEffect } from "react";
import { ReactComponent as Github } from "assets/Github.svg";
import { ReactComponent as Twitter } from "assets/Twitter.svg";

import "./Tellorfeeds.scss";
import { useMediaQuery } from "react-responsive";

//Redux
import { useSelector } from "react-redux";
//Helpers
import { usePreviousFeeds } from "./whatsnewhelpers";

export default function Tellorfeeds() {
  //Globals
  const indexer = 0;
  //Redux State
  const mostRecentGithubEvent = useSelector(
    (state) => state.miscApiCalls.githubData
  );
  const mostRecentTweet = useSelector(
    (state) => state.miscApiCalls.twitterData
  );
  //Component State
  const [currGithubEvent, prevGithubEvent] = usePreviousFeeds(
    mostRecentGithubEvent
  );
  // console.log("currGithubEvent", currGithubEvent);
  // console.log("prevGithubEvent", prevGithubEvent);
  const [currTweet, prevTweet] = usePreviousFeeds(mostRecentTweet[indexer]);
  // console.log("currTweet", currTweet);
  // console.log("prevTweet", prevTweet);

  //Component Refs
  //////Github
  const githubEffectRef = useRef();
  const githubRepoRef = useRef();
  const actorAndDateRef = useRef();
  const eventInfoRef = useRef();
  //////Twitter
  const twitterEffectRef = useRef();
  const twitterDateRef = useRef();
  const twitterTextRef = useRef();
  //Media Query
  const isMobileHeader = useMediaQuery({ query: "(max-width: 600px)" });
  const commitHelper =
    Object.keys(mostRecentGithubEvent).length > 1 &&
    mostRecentGithubEvent.actorAndDate.split(" - ");
  const latestCommit = `Last commit ${commitHelper[1]}`;
  const latestTweet = `Last tweet ${
    mostRecentTweet.length > 1 && mostRecentTweet[indexer].formattedDate
  }`;

  useEffect(() => {
    if (currGithubEvent && prevGithubEvent) {
      if (
        currGithubEvent.githubRepo != prevGithubEvent.githubRepo ||
        currGithubEvent.actorAndDate != prevGithubEvent.actorAndDate ||
        currGithubEvent.eventInfo != prevGithubEvent.eventInfo
      ) {
        //Starts transition effect
        githubEffectRef.current.classList.add("UpdateTransitionEffect");
        //Waits for transition effect before updating currPrice
        setTimeout(() => {
          //1 second fade-in class
          githubRepoRef.current.classList.add("UpdateData");
          actorAndDateRef.current.classList.add("UpdateData");
          eventInfoRef.current.classList.add("UpdateData");
          //Updates to current data after transition effect
          githubRepoRef.current.innerHTML = currGithubEvent.githubRepo;
          actorAndDateRef.current.innerHTML = currGithubEvent.actorAndDate;
          eventInfoRef.current.innerHTML = currGithubEvent.eventInfo;
          setTimeout(() => {
            eventInfoRef.current.classList.remove("UpdateData");
            actorAndDateRef.current.classList.remove("UpdateData");
            githubRepoRef.current.classList.remove("UpdateData");
            githubEffectRef.current.classList.remove("UpdateTransitionEffect");
          }, 1000);
        }, 3050);
      }
    }
  }, [mostRecentGithubEvent]);

  useEffect(() => {
    if (currTweet && prevTweet) {
      if (
        currTweet.id != prevTweet.id ||
        currTweet.formattedDate != prevTweet.formattedDate ||
        currTweet.text != prevTweet.text
      ) {
        //Starts transition effect
        twitterEffectRef.current.classList.add("UpdateTransitionEffect");
        //Waits for transition effect before updating currPrice
        setTimeout(() => {
          //1 second fade-in class
          twitterDateRef.current.classList.add("UpdateData");
          twitterTextRef.current.classList.add("UpdateData");
          //Updates to current data after transition effect
          twitterDateRef.current.innerHTML = `\u00A0- ${currTweet.formattedDate}`;
          twitterTextRef.current.innerHTML = currTweet.text;
          setTimeout(() => {
            twitterTextRef.current.classList.remove("UpdateData");
            twitterDateRef.current.classList.remove("UpdateData");
            twitterEffectRef.current.classList.remove("UpdateTransitionEffect");
          }, 1000);
        }, 3050);
      }
    }
  }, [mostRecentTweet]);

  return (
    <div className="Tellorfeeds">
      <div ref={githubEffectRef} className="Tellorfeed Tellorfeed__github">
        <div className="Tellorfeed__icon">
          <a
            href={"http://github.com/" + mostRecentGithubEvent.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>

        {isMobileHeader ? (
          <div className="Tellorfeed__txt">
            <a
              href={"http://github.com/" + mostRecentGithubEvent.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {latestCommit}
            </a>
          </div>
        ) : (
          <div className="Tellorfeed__txt">
            <a
              ref={githubRepoRef}
              href={"http://github.com/" + mostRecentGithubEvent.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {prevGithubEvent && Object.keys(prevGithubEvent).length > 1
                ? prevGithubEvent.githubRepo
                : "Loading..."}
            </a>
            <p ref={actorAndDateRef} className="bold">
              {prevGithubEvent && Object.keys(prevGithubEvent).length > 1
                ? prevGithubEvent.actorAndDate
                : ""}
            </p>
            <p ref={eventInfoRef}>
              {prevGithubEvent && Object.keys(prevGithubEvent).length > 1
                ? prevGithubEvent.eventInfo
                : ""}
            </p>
          </div>
        )}
      </div>
      <div ref={twitterEffectRef} className="Tellorfeed Tellorfeed__twitter">
        <div className="Tellorfeed__icon">
          <a
            href="http://twitter.com/wearetellor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </div>
        {isMobileHeader ? (
          <div className="Tellorfeed__txt">
            <a
              href="http://twitter.com/wearetellor"
              target="_blank"
              rel="noopener noreferrer"
            >
              {latestTweet}
            </a>
          </div>
        ) : (
          <div className="Tellorfeed__txt">
            <div className="Twitter__LinkAndDate">
              <a
                href="http://twitter.com/wearetellor"
                target="_blank"
                rel="noopener noreferrer"
              >
                @WeAreTellor
              </a>
              <p ref={twitterDateRef}>
                {prevTweet ? `\u00A0- ${prevTweet.formattedDate}` : " "}
              </p>
            </div>
            <a
              ref={twitterTextRef}
              href={`http://twitter.com/wearetellor/status/${
                mostRecentTweet[indexer] && mostRecentTweet[indexer].id
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="Tellorfeed__specialLink"
            >
              {prevTweet && prevTweet.text}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

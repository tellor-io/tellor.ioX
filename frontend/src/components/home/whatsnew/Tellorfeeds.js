import React, { useRef, useEffect } from "react";
import { ReactComponent as Github } from "assets/Github.svg";
import { ReactComponent as Twitter } from "assets/Twitter.svg";
//Redux
import { useSelector } from "react-redux";
//Helpers
import { usePrevious } from "./whatsnewhelpers";

export default function Tellorfeeds() {
  //Redux State
  const mostRecentGithubEvent = useSelector(
    (state) => state.miscApiCalls.githubData
  );

  //Component State
  const [currGithubEvent, prevGithubEvent] = usePrevious(mostRecentGithubEvent);
  console.log("currGithubEvent", currGithubEvent);
  console.log("prevGithubEvent", prevGithubEvent);
  console.log(
    "new",
    prevGithubEvent && Object.keys(prevGithubEvent).length > 1
  );
  //Component Refs
  const effectRef = useRef();
  const githubRepoRef = useRef();
  const actorAndDateRef = useRef();
  const eventInfoRef = useRef();

  useEffect(() => {
    if (currGithubEvent && prevGithubEvent) {
      if (
        currGithubEvent.githubRepo != prevGithubEvent.githubRepo ||
        currGithubEvent.actorAndDate != prevGithubEvent.actorAndDate ||
        currGithubEvent.eventInfo != prevGithubEvent.eventInfo
      ) {
        //Starts transition effect
        effectRef.current.classList.add("UpdateTransitionEffect");
        //Waits for transition effect before updating currPrice
        setTimeout(() => {
          //1 second fade-in class
          githubRepoRef.current.classList.add("UpdateData");
          actorAndDateRef.current.classList.add("UpdateData");
          eventInfoRef.current.classList.add("UpdateData");
          //Updates to current price after transition effect
          githubRepoRef.current.innerHTML = currGithubEvent.githubRepo;
          actorAndDateRef.current.innerHTML = currGithubEvent.actorAndDate;
          eventInfoRef.current.innerHTML = currGithubEvent.eventInfo;
          setTimeout(() => {
            eventInfoRef.current.classList.remove("UpdateData");
            actorAndDateRef.current.classList.remove("UpdateData");
            githubRepoRef.current.classList.remove("UpdateData");
            effectRef.current.classList.remove("UpdateTransitionEffect");
          }, 1000);
        }, 3050);
      }
    }
  }, [mostRecentGithubEvent]);

  return (
    <div className="Tellorfeeds">
      <div ref={effectRef} className="Tellorfeed Tellorfeed__github">
        <div className="Tellorfeed__icon">
          <a
            href={"http://github.com/" + mostRecentGithubEvent.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
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

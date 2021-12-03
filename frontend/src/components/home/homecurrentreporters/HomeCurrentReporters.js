import React, { useState, useEffect } from "react";
import "./HomeCurrentReporters.scss";
import HomeCurrentReporter from "../homecurrentreporters/HomeCurrentReporter";
import { useMediaQuery } from "react-responsive";

import { Link } from "react-router-dom";
import { Button } from "antd";
import { ReactComponent as Chains } from "assets/Chains.svg";
import { useSelector } from "react-redux";

export default function HomeCurrentReporters() {
  const eventsFromRedux = useSelector((state) => state.graphEvents.eventsData);
  const [homeCurrentReporters, setHomeCurrentReporters] = useState([]);
  const [TopRep, setTopRep] = useState(null);
  const [BottomRep, setBottomRep] = useState(null);
  const isSmallestSize = useMediaQuery({ query: "(max-width: 669px)" });

  useEffect(() => {
    if (eventsFromRedux) {
      const formattedData = eventsFromRedux.map((event) => {
        if (event) {
          return {
            reporter: event.reporter,
            time: event._time,
            symbols: event.reportedValueName,
          };
        }
      });
      setHomeCurrentReporters(formattedData);
    }
  }, [eventsFromRedux]);

  // //// DUUMY ////
  const testdata = [
    {
      reporter: "0x88C1F97348DA216c2deD7A3A92274f2Ff5cf3111",
      symbols: "ETH/USD 0",
    },
    {
      reporter: "0x88C1F97348DA216c2deD7A3A92274f2Ff5cf3111",
      symbols: "ETH/USD 1",
    },
    {
      reporter: "0x88C1F97348DA216c2deD7A3A92274f2Ff5cf3111",
      symbols: "ETH/USD 0",
    },
  ];
  const testdata2 = {
    reporter: "0x4DC1F97348DA216c2deD7A3A92274f2Ff5cf3422",
    symbols: "BTC/USD",
  };

  useEffect(() => {
    if (homeCurrentReporters && !TopRep) {
      setTopRep(homeCurrentReporters[0]);
    }
  }, [homeCurrentReporters, TopRep]);

  useEffect(() => {
    if (homeCurrentReporters && !BottomRep) {
      setBottomRep(homeCurrentReporters[1]);
    }
  }, [homeCurrentReporters, BottomRep]);

  return (
    <div className="HomeCurrentReporters">
      <div className="HomeCurrentReporters__illustration">
        {TopRep ? (
          <div className="currentReporter__top">
            <HomeCurrentReporter data={TopRep} />
          </div>
        ) : null}
        {BottomRep ? (
          <div className="currentReporter__bottom">
            <HomeCurrentReporter data={BottomRep} />
          </div>
        ) : null}
        <div className="reporters_and_link">
          <div className="reporters">
            {TopRep ? (
              <div className="reporters__top">
                <div className="slider"></div>
              </div>
            ) : null}
            {BottomRep ? (
              <div className="reporters__bottom">
                <div className="slider"></div>
              </div>
            ) : null}
          </div>
          {
            isSmallestSize ? null : null
            // <Link to="/becomereporter">reporters</Link>
          }
        </div>
        <div className="chains">
          <Chains />
          {
            isSmallestSize ? (
              <div className="chains__twolinks">
                {/* <Link to="/becomereporter">reporters</Link>
              <Link to="/howitworks">chains</Link> */}
              </div>
            ) : null
            // <Link to="/howitworks">chains</Link>
          }
        </div>
      </div>
      <div className="horizontal_btns">
        <Link to="/howitworks">
          <Button size="large" className="bigbutton blackbutton fxw">
            see how it works
          </Button>
        </Link>
        <Link to="/becomereporter">
          <Button size="large" className="bigbutton  blackbutton fxw">
            become a data reporter
          </Button>
        </Link>
      </div>
    </div>
  );
}

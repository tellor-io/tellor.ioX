import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Swoosh } from "assets/Swoosh.svg";
import { useSelector } from "react-redux";
import { usePrevious } from "./whatsnewhelpers";

export default function Tellorprice() {
  //Redux State
  const priceFromRedux = useSelector(
    (state) => state.miscApiCalls.coinGeckoData
  );
  //Component State
  const [tempPrice, setTempPrice] = useState();
  const [currPrice, prevPrice] = usePrevious(
    priceFromRedux != 0 ? priceFromRedux : tempPrice
  );
  //Component Refs
  const effectRef = useRef();
  const priceRef = useRef();

  useEffect(() => {
    setTempPrice(priceFromRedux);
  }, []);

  useEffect(() => {
    //Starts transition effect
    effectRef.current.classList.add("UpdateTransitionEffect");
    console.log("tempPrice inside useEff", tempPrice);
    console.log("priceFromRedux inside useEff", priceFromRedux);
    console.log("currPrice inside useEff", currPrice);
    console.log("prevPrice inside useEff", prevPrice);
    setTimeout(() => {
      //1 second fade-in class
      priceRef.current.classList.add("UpdateData");
      //Updates to current price after transition effect
      priceRef.current.innerHTML = `${new Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
      }).format(currPrice)}`;
      console.log("tempPrice inside Timeout", tempPrice);
      console.log("priceFromRedux inside Timeout", priceFromRedux);
      console.log("currPrice inside Timeout", currPrice);
      console.log("prevPrice inside Timeout", prevPrice);
      setTimeout(() => {
        priceRef.current.classList.remove("UpdateData");
        effectRef.current.classList.remove("UpdateTransitionEffect");
      }, 1000);
    }, 3050);
  }, [priceFromRedux]);

  console.log("tempPrice", tempPrice);
  console.log("priceFromRedux", priceFromRedux);
  console.log("currPrice", currPrice);
  console.log("prevPrice", prevPrice);

  return (
    <div ref={effectRef} className="Tellorprice">
      <Swoosh />
      <a
        href="https://www.coingecko.com/en/coins/tellor"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tellor (TRB)
      </a>
      <p ref={priceRef}>
        {new Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "USD",
        }).format(prevPrice)}
      </p>
    </div>
  );
}

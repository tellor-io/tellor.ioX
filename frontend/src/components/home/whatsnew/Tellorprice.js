import React, { useEffect, useRef } from "react";
import { ReactComponent as Swoosh } from "assets/Swoosh.svg";
import { useSelector } from "react-redux";
import { usePrevious } from "./whatsnewhelpers";
import "./Tellorprice.scss";

export default function Tellorprice() {
  //Redux State
  const priceFromRedux = useSelector(
    (state) => state.miscApiCalls.coinGeckoData
  );
  //Component State
  const [currPrice, prevPrice] = usePrevious(priceFromRedux);
  //Component Refs
  const effectRef = useRef();
  const priceRef = useRef();

  // useEffect(() => {
  //   //Starts transition effect
  //   effectRef.current.classList.add("UpdateTransitionEffect");
  //   //Waits for transition effect before updating currPrice
  //   setTimeout(() => {
  //     //1 second fade-in class
  //     priceRef.current.classList.add("UpdateData");
  //     //Updates to current price after transition effect
  //     if (currPrice != 0) {
  //       priceRef.current.innerHTML = `${new Intl.NumberFormat("en-EN", {
  //         style: "currency",
  //         currency: "USD",
  //       }).format(currPrice)}`;
  //     }
  //     setTimeout(() => {
  //       priceRef.current.classList.remove("UpdateData");
  //       effectRef.current.classList.remove("UpdateTransitionEffect");
  //     }, 1000);
  //   }, 3050);
  // }, [priceFromRedux]);


  useEffect(() => {
      //Updates to current price after transition effect
      if (currPrice != 0) {
        priceRef.current.innerHTML = `${new Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "USD",
        }).format(currPrice)}`;
      }

  }, [priceFromRedux]);



  return (
    <div ref={effectRef} className="Tellorprice">
      <Swoosh />
      <div className="Tellorprice__txt">
        <a
          href="https://www.coingecko.com/en/coins/tellor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tellor (TRB)
        </a>
        <p ref={priceRef}>
          {prevPrice && prevPrice != 0
            ? new Intl.NumberFormat("en-EN", {
                style: "currency",
                currency: "USD",
              }).format(prevPrice)
            : "Loading..."}
        </p>
      </div>
    </div>
  );
}

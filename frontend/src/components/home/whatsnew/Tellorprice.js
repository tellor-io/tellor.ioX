import React from "react";
import { ReactComponent as Swoosh } from "assets/Swoosh.svg";
import { useSelector } from "react-redux";

export default function Tellorprice() {
  const price = useSelector((state) => state.miscApiCalls.coinGeckoData);
  return (
    <div className="Tellorprice">
      <Swoosh />
      <a
        href="https://www.coingecko.com/en/coins/tellor"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tellor (TRB)
      </a>
      <p>{`$${price}`}</p>
    </div>
  );
}

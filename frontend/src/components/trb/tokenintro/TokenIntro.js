import React, { useEffect } from "react";
import "./TokenIntro.scss";

const TokenIntro = () => {
  useEffect(() => {
    //Makes page load at top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="TokenIntro">
      <h1 className="page-header">TRB, Tellor’s native token</h1>
      <div className="TokenIntro__desc">
        <p className="page-text">
          The first way to get involved with Tellor is acquiring some TRB.
        </p>
        <p className="page-text">
          The purpose of Tellor’s native token, Tributes (also known as TRB), is
          to connect and align data reporters, oracle users, community
          governance and treasury decisions.
        </p>
      </div>
    </div>
  );
};

export default TokenIntro;

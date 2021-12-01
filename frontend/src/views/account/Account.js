import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Connected from "components/account/connected/Connected";
import Unconnected from "components/account/unconnected/Unconnected";
import AccountHeader from "components/account/accountHeader/AccountHeader";
import { UserContext } from "contexts/User";
import { fromWei } from "utils/helpers";

import Avatar from "assets/AvatarDark.png";

const Account = () => {
  //Makes page load at top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const urlAddress = useParams().address;
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const [account, setAccount] = useState({
    address: "",
    trb: 0,
  });

  // const [showConnected, setShowConnected] = useState(false);
  const [IsCurrentUser, setIsCurrentUser] = useState(false);
  const [isReporter, setIsReporter] = useState(false);
  const [reporting, setReporting] = useState({});
  const [history, setHistory] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    console.log("urlAddress: ", urlAddress);
    //if logged in and address matches url then send to connected
    if (urlAddress) {
      //set user account
      setAccount({
        address: urlAddress,
        trb: "tbd",
      });
    }
  }, [urlAddress]);

  useEffect(() => {
    console.log("urlAddress: ", urlAddress);
    //if logged in and address matches url then send to connected
    if (currentUser && currentUser.address == urlAddress) {
      setIsCurrentUser({
        IsCurrentUser: true,
      });
      //set activity fields
      setActivities([]);
    }
  }, [currentUser, urlAddress]);

  // useEffect(() => {
  //     console.log('urlAddress: ', urlAddress)
  //     //if logged in and address matches url then send to connected
  //     if (currentUser && currentUser.address == urlAddress) {
  //         currentUser.contracts.balanceOf(currentUser.address).then(result => {
  //             let balance = fromWei(result)
  //             //set user account
  //             setAccount({
  //                 address: currentUser.address,
  //                 addressHidden: truncateAddr(currentUser.address),
  //                 avatar: Avatar,
  //                 trb: balance,
  //             })
  //             //if user is not a reporter
  //             if (balance < 100) {
  //                 //TODO: set total report events if any
  //                 setReporting({
  //                     earned: balance,
  //                     current: "ETH/USD",
  //                     total: 0,
  //                     lastReported: "4 days ago"
  //                 });
  //                 //TODO : set History if any
  //                 //setHistory();

  //             } else {
  //                 //if user is a reporter
  //                 setIsReporter(true);
  //                 //TODO : add real history
  //                 setHistory(sampleHistory);
  //             }
  //         })

  //         //set activity fields
  //         //TODO: use real data
  //         //setActivities(sampleActivities);
  //         setActivities([]);
  //         setShowConnected(true);
  //     } else {
  //         //else set up unconnected display
  //         //TODO: add clicked account
  //         setAccount({
  //             address: urlAddress,
  //             addressHidden: (urlAddress.substring(0,6) + '...' + urlAddress.substring(urlAddress.length - 4)),//truncateAddr(urlAddress),
  //             avatar: Avatar,
  //             trb: 0,
  //         })
  //         //TODO : set reporter data
  //         setIsReporter(false);
  //         setReporting({
  //             earned: 102,
  //             current: "ETH/USD",
  //             total: 88,
  //             lastReported: "4 days ago"
  //         });
  //         //TODO : add real history
  //         //setHistory(sampleHistory);
  //         //TODO: use real data
  //         setActivities(sampleActivities);

  //     }
  // },[currentUser, urlAddress])

  const sampleHistory = [
    {
      key: 1,
      symbols: "BTC/USD 24h TWAP",
      value: "45636.824417",
      reporter: "0x87e6...981B",
      accountID: "0x87e6981B",
      date: "22/09/2021, 14:25:33",
      avatar: Avatar,
    },
    {
      key: 2,
      symbols: "ETH/USD",
      value: "45636.824417",
      reporter: "0x87e6...981B",
      accountID: "0x87e6981B",
      date: "22/09/2021, 14:25:33",
      avatar: Avatar,
    },
    {
      key: 3,
      symbols: "BTC/USD",
      value: "45636.824417",
      reporter: "0x87e6...981B",
      accountID: "0x87e6981B",
      date: "22/09/2021, 14:25:33",
      avatar: Avatar,
    },
    {
      key: 4,
      symbols: "BNB/USD",
      value: "4536.824417",
      reporter: "0x87e6...981B",
      accountID: "0x87e6981B",
      date: "22/08/2021, 14:25:33",
      avatar: Avatar,
    },
    {
      key: 5,
      symbols: "BTC/USD 24h TWAP",
      value: "45636.82417",
      reporter: "0x87e6...981B",
      accountID: "0x87e6981B",
      date: "22/09/2021, 14:25:33",
      avatar: Avatar,
    },
    {
      key: 6,
      symbols: "ETH/USD",
      value: "4566.824417",
      reporter: "0x87e6...981B",
      accountID: "0x87e6981B",
      date: "22/10/2021, 14:25:33",
      avatar: Avatar,
    },
    {
      key: 7,
      symbols: "BTC/USD",
      value: "45636.82441",
      reporter: "0x87e6...981B",
      accountID: "0x87e6981B",
      date: "21/09/2021, 14:25:33",
      avatar: Avatar,
    },
    {
      key: 8,
      symbols: "BNB/USD",
      value: "45636.824417",
      reporter: "0x87e6...981B",
      accountID: "0x87e6981B",
      date: "24/09/2021, 14:25:33",
      avatar: Avatar,
    },
    {
      key: 9,
      symbols: "BNB/USD",
      value: "456.824417",
      reporter: "0x87e6...981B",
      accountID: "0x87e6981B",
      date: "22/09/2021, 14:25:33",
      avatar: Avatar,
    },
  ];
  const sampleActivities = [
    {
      key: 1,
      action: "vote on dispute",
      description: "0x2024...8f52 supported dispute id 44",
      date: "22/09/2021, 14:25:33",
      txhash: "0x5d6b...32b4",
    },
    {
      key: 2,
      action: "dispute value",
      description: "0x2024...8f52 disputed 99.99 for BTC/USD by 0x88p0F...D1Xc",
      date: "23/09/2021, 14:25:33",
      txhash: "0x5d6b...32b4",
    },
    {
      key: 3,
      action: "vote on dispute",
      description: "0x2024...8f52 supported dispute id 44",
      date: "22/09/2021, 14:25:33",
      txhash: "0x5d6b...32b4",
    },
    {
      key: 4,
      action: "vote on TIP",
      description: "0x2024...8f52 supported TIP id 12",
      date: "24/11/2021, 14:25:33",
      txhash: "0x5d6b...32b4",
    },
    {
      key: 5,
      action: "dispute value",
      description: "0x2024...8f52 disputed 99.99 for BTC/USD by 0x88p0F...D1Xc",
      date: "23/09/2021, 14:25:33",
      txhash: "0x5d6b...32b4",
    },
    {
      key: 6,
      action: "vote on TIP",
      description: "0x2024...8f52 supported TIP id 12",
      date: "24/11/2021, 14:25:33",
      txhash: "0x5d6b...32b4",
    },
  ];

  // const getHiddenAddress = (addr) => {
  //     return (addr.substring(0,6) + '...' + addr.substring(addr.length - 4))
  // }

  return (
    <div className="viewContainer">
      <AccountHeader account={account} IsCurrentUser={IsCurrentUser} />

      {/* { showConnected
                ? <Connected 
                    account={account} 
                    reporting={reporting}
                    history={history}
                    activities={activities}
                    isReporter={isReporter} />
                : <Unconnected 
                    account={account} 
                    reporting={reporting}
                    history={history}
                    activities={activities}
                    isReporter={isReporter}/>
            } */}
    </div>
  );
};

export default Account;

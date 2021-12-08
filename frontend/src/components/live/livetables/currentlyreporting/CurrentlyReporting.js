import React, { useEffect, useState } from "react";

import "./CurrentlyReporting.scss";

import { Table } from "antd";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { formatDate, shortenAddr } from "../livetablehelpers";
// import { Jazzicon } from "@ukstv/jazzicon-react";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

const CurrentlyReporting = () => {
  //Redux State
  const eventsFromRedux = useSelector((state) => state.graphEvents.eventsData);
  //Component State
  const [events, setEvents] = useState([]);
  const [addyFilters, setAddyFilters] = useState([]);

  useEffect(() => {
    if (eventsFromRedux.length > 1) {
      let eventsArray = [];
      let addyFilterArray = [];
      let order = 1;
      eventsFromRedux.map((event) => {
        event.key = order;
        event.truncAddy = shortenAddr(event.reporter, "shorten");
        event.urlAddy = shortenAddr(event.reporter, "url");
        event.formattedDate = formatDate(event._time);
        eventsArray.push(event);

        if (addyFilterArray.includes(event.truncAddy)) {
        } else {
          addyFilterArray.push({
            text: event.truncAddy,
            value: event.truncAddy,
          });
        }

        order++;
      });
      setAddyFilters(addyFilterArray);
      setEvents(eventsArray);
    }
    return () => {
      setEvents([]);
      setAddyFilters([]);
    };
  }, [eventsFromRedux]);

  const columns = [
    {
      title: "symbols",
      dataIndex: "reportedValueName",
      key: "symbols",
      sorter: {
        compare: (a, b) =>
          a.reportedValueName.localeCompare(b.reportedValueName),
      },
      width: "25%",
    },
    {
      title: "value",
      dataIndex: "reportedValue",
      key: "value",
      sorter: {
        compare: (a, b) => a.reportedValue.localeCompare(b.reportedValue),
      },
      width: "20%",
    },
    {
      title: "reporter",
      dataIndex: "truncAddy",
      key: "reporter",
      width: 50,
      maxWidth: 50,
      render: (t, r) => (
        <div className="reportby">
          <Jazzicon diameter={20} seed={jsNumberForAddress(r.reporter)} />
          <Link
            to={{ pathname: `/account/address/${r.reporter}` }}
            className="link-black latestReport"
          >
            {r.truncAddy}
          </Link>
        </div>
      ),
      filters: addyFilters,
      onFilter: (value, record) => record.truncAddy.includes(value),
      width: "20%",
    },
    {
      title: "date",
      dataIndex: "formattedDate",
      key: "date",
      sorter: {
        compare: (a, b) => a.formattedDate.localeCompare(b.formattedDate),
      },
    },
    {
      title: "",
      key: "dispute",
      render: () => (
        <div className="dispute-container">
          <button className="dispute-btn">dispute</button>
        </div>
      ),
    },
  ];

  const columns_mobile = [
    {
      title: "symbols",
      dataIndex: "reportedValueName",
      key: "symbols",
      sorter: {
        compare: (a, b) =>
          a.reportedValueName.localeCompare(b.reportedValueName),
      },
    },
    {
      title: "reporter",
      dataIndex: "truncAddy",
      key: "reporter",
      width: 50,
      maxWidth: 50,
      render: (t, r) => (
        <div className="reportby">
          <Jazzicon diameter={20} seed={jsNumberForAddress(r.reporter)} />
          <Link
            to={{ pathname: `/account/address/${r.reporter}` }}
            className="link-black latestReport"
          >
            {r.truncAddy}
          </Link>
        </div>
      ),
      filters: addyFilters,
      onFilter: (value, record) => record.truncAddy.includes(value),
    },
  ];

  const isMobile = useMediaQuery({ query: "(max-width: 810px)" });

  return (
    <div className="CurrentlyReporting">
      <div className="CurrentlyReporting__header">
        <h3>Currently reporting</h3>
      </div>
      <div className="CurrentlyReporting__table">
        <Table
          dataSource={events}
          columns={isMobile ? columns_mobile : columns}
          pagination={{
            defaultPageSize: 8,
            pageSizeOptions: ["10", "20", "50", "100"],
          }}
        />
      </div>
    </div>
  );
};

// const data = [
//   {
//     key: 1,
//     symbols: "BTC/USD 24h TWAP",
//     value: "45636.824417",
//     reporter: "0x112q6...987E",
//     accountID: "0x112q6987E",
//     date: "22/09/2021, 14:25:33",
//     avatar: Avatar,
//   },
//   {
//     key: 2,
//     symbols: "ETH/USD",
//     value: "45636.824417",
//     reporter: "0x44pl...8879",
//     accountID: "0x44pl8879",
//     date: "22/09/2021, 14:25:33",
//     avatar: Avatar,
//   },
//   {
//     key: 3,
//     symbols: "BTC/USD",
//     value: "45636.824417",
//     reporter: "0x112q6...987E",
//     accountID: "0x112q6987E",
//     date: "22/09/2021, 14:25:33",
//     avatar: Avatar,
//   },
//   {
//     key: 4,
//     symbols: "BNB/USD",
//     value: "4536.824417",
//     reporter: "0x44pl...8879",
//     accountID: "0x44pl8879",
//     date: "22/08/2021, 14:25:33",
//     avatar: Avatar,
//   },
//   {
//     key: 5,
//     symbols: "BTC/USD 24h TWAP",
//     value: "45636.82417",
//     reporter: "0x44pl...8879",
//     accountID: "0x44pl8879",
//     date: "22/09/2021, 14:25:33",
//     avatar: Avatar,
//   },
//   {
//     key: 6,
//     symbols: "ETH/USD",
//     value: "4566.824417",
//     reporter: "0x87e6...981B",
//     accountID: "0x87e6981B",
//     date: "22/10/2021, 14:25:33",
//     avatar: Avatar,
//   },
//   {
//     key: 7,
//     symbols: "BTC/USD",
//     value: "45636.82441",
//     reporter: "0x44pl...8879",
//     accountID: "0x44pl8879",
//     date: "21/09/2021, 14:25:33",
//     avatar: Avatar,
//   },
//   {
//     key: 8,
//     symbols: "BNB/USD",
//     value: "45636.824417",
//     reporter: "0x44pl...8879",
//     accountID: "0x44pl8879",
//     date: "24/09/2021, 14:25:33",
//     avatar: Avatar,
//   },
//   {
//     key: 9,
//     symbols: "BNB/USD",
//     value: "456.824417",
//     reporter: "0x87e6...981B",
//     accountID: "0x87e6981B",
//     date: "22/09/2021, 14:25:33",
//     avatar: Avatar,
//   },
//   {
//     key: 10,
//     symbols: "BTC/USD 24h TWAP",
//     value: "45636.827",
//     reporter: "0x44pl...8879",
//     accountID: "0x44pl8879",
//     date: "22/09/2021, 14:25:33",
//     avatar: Avatar,
//   },
//   {
//     key: 11,
//     symbols: "ETH/USD",
//     value: "536.824417",
//     reporter: "0x44pxxl...8879",
//     accountID: "0x44pl8879",
//     date: "22/09/2021, 14:25:33",
//     avatar: Avatar,
//   },
//   {
//     key: 12,
//     symbols: "BTC/USD",
//     value: "45636.8417",
//     reporter: "0x44pl...8879",
//     accountID: "0x44pl8879",
//     date: "22/09/2021, 14:25:33",
//     avatar: Avatar,
//   },
// ];

export default CurrentlyReporting;

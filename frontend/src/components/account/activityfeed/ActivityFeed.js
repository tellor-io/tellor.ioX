import React from "react";

import "./ActivityFeed.scss";
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { useMediaQuery } from "react-responsive";

const ActivityFeed = (props) => {
    const { data } = props;
    const columns = [
        {
            title: "action",
            dataIndex: "action",
            key: "action",
            width: "20%",
            sorter: {
                compare: (a, b) => a.action.localeCompare(b.action),
            },
        },
        {
            title: "description",
            dataIndex: "description",
            key: "description",
            width: "50%",
            render: (t, r) => ( 
                <div className="desc-container">
                        <p className="page-text">{r.description}</p>
                        <a className="page-text">more details</a>
                </div>),
            filters: [
                { text: "0x2024...8f52 supported dispute id 44", value: "0x2024...8f52 supported dispute id 44" },
                { text: "0x2024...8f52 disputed 99.99 for BTC/USD by 0x88p0F...D1Xc", value: "0x2024...8f52 disputed 99.99 for BTC/USD by 0x88p0F...D1Xc" },
                { text: "0x2024...8f52 supported TIP id 12", value: "0x2024...8f52 supported TIP id 12" },
            ],
            // onFilter: (value, record) => record.description.includes(value),
        },
        {
            title: "date",
            dataIndex: "date",
            key: "date",
            width: "20%",
            sorter: {
                compare: (a, b) => a.date.localeCompare(b.date),
            },
        },
        {
            title: 'tx hash',
            dataIndex: "txhash",
            key: 'txhash',
            width: "10%",
            // sorter: {
            //     compare: (a, b) => a.txhash - b.txhash
            // },
          },
    ]

    const columns_mobile = [
        {
            title: "action",
            dataIndex: "action",
            key: "action",
            sorter: {
                compare: (a, b) => a.action.localeCompare(b.action),
            },
        },
        {
            title: "description",
            dataIndex: "description",
            key: "description",
            render: (t, r) => ( 
                <div className="desc-container">
                    <div className="page-text">{r.description}</div>
                    <a className="page-text">more details</a>
                </div>),
            filters: [
                { text: "0x2024...8f52 supported dispute id 44", value: "0x2024...8f52 supported dispute id 44" },
                { text: "0x2024...8f52 disputed 99.99 for BTC/USD by 0x88p0F...D1Xc", value: "0x2024...8f52 disputed 99.99 for BTC/USD by 0x88p0F...D1Xc" },
                { text: "0x2024...8f52 supported TIP id 12", value: "0x2024...8f52 supported TIP id 12" },
            ],
            onFilter: (value, record) => record.description.includes(value),
        },
    ];

    const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
    //table 
    if (data.length > 0) {
        return (
            <div className="ActivityFeed">
                <div className="ActivityFeed__header">
                    <h3 className="page-header-small">Activity feed</h3>
                </div>
                <div className="ActivityFeed__table">
                    <Table 
                        dataSource={data} 
                        columns={isMobile ? columns_mobile : columns} 
                        pagination={{ defaultPageSize: 3 }} />
                </div>
            </div>
        ); 
    }
    //empty data
    return (
        <div className="ActivityFeed">
             <div className="ActivityFeed__header">
                <div className="empty-container">
                    <h3 className="empty">Activity feed</h3>
                    <p className="page-text empty">No activity yet</p>
                </div>
            </div>
        </div>
    ); 
};


ActivityFeed.propTypes = {
    data: PropTypes.array.isRequired,
}

export default ActivityFeed;

import React from 'react'

import './LiveDatapoints.scss'
import Avatar from 'assets/Avatar.png';

import { Table } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const LiveDatapoints = () => {


    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            sorter: {
                compare: (a, b) => a.id - b.id
            },
            width: "5%",
        },
        {
            title: "symbols",
            dataIndex: "symbols",
            key: "symbols",
            filters: [
                { text: "ETH/USD", value: "ETH/USD" },
                { text: "BTC/USD", value: "BTC/USD" },
                { text: "BNB/USD", value: "BNB/USD" },
            ],
            onFilter: (value, record) => record.symbols.includes(value),
            width: "25%",
        },
        {
            title: "latest update",
            dataIndex: "latestUpdate",
            key: "latestUpdate",
            sorter: {
                compare: (a, b) => a.latestUpdate.localeCompare(b.latestUpdate),
            },
            width: "15%",
        },
        {
            title: "latest report by",
            dataIndex: "latestReportBy",
            key: "latestReportBy",
            width: 50,
            maxWidth: 50,
            render: (t, r) => ( 
                <div className="reportby">
                <img src={r.avatar} />
                    <Link to={{ pathname: `/account/address/${r.accountID}`}} className="link-black latestReport">
                        {r.latestReportBy}
                    </Link>
                </div>),
            filters: [
                { text: "E0x44pl...8879", value: "E0x44pl...8879" },
                { text: "0x87e6...987E", value: "B0x87e6...987E" },
                { text: "0x44pl...8879", value: "0x44pl...8879" },
            ],
            onFilter: (value, record) => record.latestReportBy.includes(value),
            width: "20%",
        },
        {
            title: "value",
            dataIndex: "value",
            key: "value",
            sorter: {
                compare: (a, b) => a.value - b.value
            },
        }
    ]

    const columns_mobile = [
        {
            title: "symbols",
            dataIndex: "symbols",
            key: "symbols",
            filters: [
                { text: "ETH/USD", value: "ETH/USD" },
                { text: "BTC/USD", value: "BTC/USD" },
                { text: "BNB/USD", value: "BNB/USD" },
            ],
            onFilter: (value, record) => record.symbols.includes(value),
        },
        {
            title: "value",
            dataIndex: "value",
            key: "value",
            sorter: {
                compare: (a, b) => a.value - b.value
            },
        }
    ];

    const isMobile = useMediaQuery({ query: "(max-width: 810px)" });

    //mobile dropdown row
    const mobileExpandedRow = () => (
        <div >
            <div className="firstRow">
                
            </div>
        </div>
    )
    //dropdown row
    const expandedRow = () => (
        <div >
            <div className="firstRow">
                
            </div>
        </div>
    )

    return (
        <div className="LiveDatapoints">
            <div className="LiveDatapoints__header">
                <h3>Datapoints</h3>
            </div>
            <div className="LiveDatapoints__table">
                <Table 
                    dataSource={data} 
                    columns={isMobile ? columns_mobile : columns} 
                    pagination={{ defaultPageSize: 5 }}
                    expandable={{
                        expandedRowRender: (record, i) => {
                            return isMobile ?  mobileExpandedRow() :  expandedRow() 
                        },
                        expandIcon: ({ expanded, onExpand, record }) =>
                            expanded ? (
                                <MinusCircleOutlined onClick={(e) => onExpand(record, e)} />
                            ) : (
                                <PlusCircleOutlined onClick={(e) => onExpand(record, e)} />
                            ),
                            rowExpandable: (record) => record.builds !== "Not Expandable",
                        }}
                        expandIconColumnIndex={5}
                    />
            </div>
        </div>
    )
}


const data = [
    {   
        key: 1,
        id: 1,
        symbols: "ETH/USD",
        latestUpdate: "4 min ago",
        latestReportBy: "0x44pl...8879",
        accountID: "0x44pl8879",
        value: "2920.01",
        avatar: Avatar,
    },{
        key: 2,
        id: 2,
        symbols: "BTC/USD",
        latestUpdate: "12 sec ago",
        latestReportBy: "0x87e6...987E",
        accountID: "0x87e6987E",
        value: "42234.00",
        avatar: Avatar,
    },{
        key: 3,
        id: 3,
        symbols: "BTC/USD 24h TWAP",
        latestUpdate: "444 sec ago",
        latestReportBy: "0x87e6...981B",
        accountID: "0x87e6981B",
        value: "45636.824417",
        avatar: Avatar,
    },{   
        key: 4,
        id: 4,
        symbols: "ETH/BTC",
        latestUpdate: "33 min ago",
        latestReportBy: "0x112q6...987E",
        accountID: "0x112q6987E",
        value: "0.07008",
        avatar: Avatar,
    },{
        key: 5,
        id: 5,
        symbols: "BTC/USD",
        latestUpdate: "12 sec ago",
        latestReportBy: "0x87e6...987E",
        accountID: "0x87e6987E",
        value: "42234.00",
        avatar: Avatar,
    },{
        key: 6,
        id: 6,
        symbols: "BNB/USD",
        latestUpdate: "4 min ago",
        latestReportBy: "0x44pl...8879",
        accountID: "0x44pl8879",
        value: "359.555",
        avatar: Avatar,
    },{   
        key: 7,
        id: 7,
        symbols: "ETH/USD",
        latestUpdate: "4 min ago",
        latestReportBy: "E0x44pl...8879",
        accountID: "E0x44pl8879",
        value: "2920.01",
        avatar: Avatar,
    },{
        key: 8,
        id: 8,
        symbols: "BTC/USD",
        latestUpdate: "12 sec ago",
        latestReportBy: "0x87e6...987E",
        accountID: "0x87e6987E",
        value: "42234.00",
        avatar: Avatar,
    },{
        key: 9,
        id: 9,
        symbols: "BNB/USD",
        latestUpdate: "4 min ago",
        latestReportBy: "0x44pl...8879",
        accountID: "0x44pl8879",
        value: "359.555",
        avatar: Avatar,
    },
]

export default LiveDatapoints;

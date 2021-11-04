import React from 'react'

import './LiveDatapoints.scss'

import { Table } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import PropTypes from 'prop-types';

const LiveDatapoints = () => {

const data = [
    {   
        key: 1,
        id: 1,
        symbols: "ETH/USD",
        latestUpdate: "4 min ago",
        latestReportBy: "0x44pl...8879",
        value: "2920.01",
    },{
        key: 2,
        id: 2,
        symbols: "BTC/USD",
        latestUpdate: "12 sec ago",
        latestReportBy: "0x87e6...987E",
        value: "42234.00",
    },{
        key: 3,
        id: 3,
        symbols: "BNB/USD",
        latestUpdate: "4 min ago",
        latestReportBy: "0x44pl...8879",
        value: "359.555",
    },
]

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            sorter: {
                compare: (a, b) => a.id - b.id
            },
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
        },
        {
            title: "latest update",
            dataIndex: "latestUpdate",
            key: "latestUpdate",
            sorter: {
            compare: (a, b) => a.latestUpdate.localeCompare(b.latestUpdate),
            multiple: 1,
            },
        },
        {
            title: "latest report by",
            dataIndex: "latestReportBy",
            key: "latestReportBy",
            filters: [
                { text: "E0x44pl...8879", value: "0x44pl...8879" },
                { text: "0x87e6...987E", value: "B0x87e6...987E" },
                { text: "0x44pl...8879", value: "0x44pl...8879" },
            ],
            onFilter: (value, record) => record.latestReportBy.includes(value),
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

    return (
        <div className="LiveDatapoints">
            <div className="LiveDatapointss__header">
                <h3>Datapoints</h3>
            </div>
            <div className="LiveDatapointss__table">
                <Table dataSource={data} columns={isMobile ? columns_mobile : columns} />
            </div>
        </div>
    )
}


export default LiveDatapoints;

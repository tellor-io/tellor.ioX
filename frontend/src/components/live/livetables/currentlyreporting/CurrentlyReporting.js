import React from 'react'

import './CurrentlyReporting.scss'
import Avatar from 'assets/Avatar.png';

import { Table } from 'antd'
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const CurrentlyReporting = () => {


    const columns = [
        {
            title: "symbols",
            dataIndex: "symbols",
            key: "symbols",
            sorter: {
                compare: (a, b) => a.symbols.localeCompare(b.symbols),
            },
            width: "25%",
        },
        {
            title: "value",
            dataIndex: "value",
            key: "value",
            sorter: {
                compare: (a, b) => a.value.localeCompare(b.value),
            },
            width: "20%",
        },
        {
            title: "reporter",
            dataIndex: "reporter",
            key: "reporter",
            width: 50,
            maxWidth: 50,
            render: (t, r) => ( 
                <div className="reportby">
                    <img src={r.avatar} />
                    <Link to={{ pathname: `/account/address/${r.accountID}`}} className="link-black latestReport">
                        {r.reporter}
                    </Link>
                </div>),
            filters: [
                { text: "E0x44pl...8879", value: "0x44pl...8879" },
                { text: "0x87e6...987E", value: "B0x87e6...987E" },
                { text: "0x44pxxl...8879", value: "0x44pxxl...8879" },
            ],
            onFilter: (value, record) => record.reporter.includes(value),
            width: "20%",
        },
        {
            title: "date",
            dataIndex: "date",
            key: "date",
            sorter: {
                compare: (a, b) => a.date.localeCompare(b.date),
            },
        },{
            title: '',
            key: 'dispute',
            render: () => (  
                <div className="dispute-container">
                    <button className="dispute-btn">dispute</button>
                </div>  ),
          },
    ]
    

    const columns_mobile = [
        {
            title: "symbols",
            dataIndex: "symbols",
            key: "symbols",
            sorter: {
                compare: (a, b) => a.symbols.localeCompare(b.symbols),
            },
        },
        {
            title: "reporter",
            dataIndex: "reporter",
            key: "reporter",
            width: 50,
            maxWidth: 50,
            render: (t, r) => ( 
                <div className="reportby">
                    <img src={r.avatar} />
                    <Link to={{ pathname: `/account/address/${r.accountID}`}} className="link-black latestReport">
                        {r.reporter}
                    </Link>
                </div>),
            filters: [
                { text: "E0x44pl...8879", value: "0x44pl...8879" },
                { text: "0x87e6...987E", value: "B0x87e6...987E" },
                { text: "0x44pl...8879", value: "0x44pl...8879" },
            ],
            onFilter: (value, record) => record.reporter.includes(value),
        }
    ];

    const isMobile = useMediaQuery({ query: "(max-width: 810px)" });

    return (
        <div className="CurrentlyReporting">
            <div className="CurrentlyReporting__header">
                <h3>Currently reporting</h3>
            </div>
            <div className="CurrentlyReporting__table">
                <Table 
                    dataSource={data} 
                    columns={isMobile ? columns_mobile : columns} 
                    pagination={{ defaultPageSize: 8 }}
                    />
            </div>
        </div>
    )
}


const data = [
    {   
        key: 1,
        symbols: "BTC/USD 24h TWAP",
        value: "45636.824417",
        reporter: "0x112q6...987E",
        accountID: "0x112q6987E",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 2,
        symbols: "ETH/USD",
        value: "45636.824417",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 3,
        symbols: "BTC/USD",
        value: "45636.824417",
        reporter: "0x112q6...987E",
        accountID: "0x112q6987E",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 4,
        symbols: "BNB/USD",
        value: "4536.824417",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
        date: "22/08/2021, 14:25:33",
        avatar: Avatar,
    },{   
        key: 5,
        symbols: "BTC/USD 24h TWAP",
        value: "45636.82417",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
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
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
        date: "21/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 8,
        symbols: "BNB/USD",
        value: "45636.824417",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
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
    },{   
        key: 10,
        symbols: "BTC/USD 24h TWAP",
        value: "45636.827",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 11,
        symbols: "ETH/USD",
        value: "536.824417",
        reporter: "0x44pxxl...8879",
        accountID: "0x44pl8879",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 12,
        symbols: "BTC/USD",
        value: "45636.8417",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },
]

export default CurrentlyReporting;





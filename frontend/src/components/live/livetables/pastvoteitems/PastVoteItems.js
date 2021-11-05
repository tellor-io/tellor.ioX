import React from 'react'

import './PastVoteItems.scss'
import Avatar from 'assets/Avatar.png';

import { Table } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const PastVoteItems = () => {

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
            title: "type",
            dataIndex: "type",
            key: "type",
            sorter: {
                compare: (a, b) => a.type.localeCompare(b.type),
            },
            width: "10%",
        },
        {
            title: "description",
            dataIndex: "description",
            key: "description",
            sorter: {
                compare: (a, b) => a.description.localeCompare(b.description),
            },
            render: (t, r) => ( 
                <div className="">
                    <p className="page-text-black">{r.description}</p>
                </div>),
            width: "60%",
        },
        {
            title: "status",
            dataIndex: "status",
            key: "status",
            sorter: {
                compare: (a, b) => a.status.localeCompare(b.status),
            },
            render: (t, r) => ( 
                <div className="">
                    <p className="page-text-black">{r.status}</p>
                </div>),
        },
        {
            title: 'votes',
            dataIndex: "votes",
            key: 'votes',
            sorter: {
                compare: (a, b) => a.votes.localeCompare(b.votes),
            },
          },
    ]

    const columns_mobile = [
        {
            title: "type",
            dataIndex: "type",
            key: "type",
            sorter: {
                compare: (a, b) => a.type.localeCompare(b.type),
            },
        },
        {
            title: "description",
            dataIndex: "description",
            key: "description",
            sorter: {
                compare: (a, b) => a.description.localeCompare(b.description),
            },
            render: () => (  
                <div className="dispute-container">
                    <button className="dispute-btn">dispute</button>
                </div>  ),
        },
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
        <div className="PastVoteItems">
            <div className="PastVoteItems__header">
                <h3>Past vote items</h3>
            </div>
            <div className="PastVoteItems__table">
                <Table 
                    dataSource={data} 
                    columns={isMobile ? columns_mobile : columns} 
                    pagination={{ defaultPageSize: 8 }}
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
                        expandIconColumnIndex={7}
                    />
            </div>
        </div>
    )
}


const data = [
    {   
        key: 1,
        id: 1,
        type: "Dispute",
        description: "0x44pl...8879 submitted 9999.9 for BTC/USD",
        status: "accepted",
        votes: 23,
    },
    {   
        key: 2,
        id: 2,
        type: "Dispute",
        description: "0xFfL2...2231 submitted 77.9 for BNB/USD",
        status: "accepted",
        votes: 123,
    },
    {   
        key: 3,
        id: 3,
        type: "Dispute",
        description: "0xFfL2...2231 disputes vote item 11",
        status: "accepted",
        votes: 88
    },
    {   
        key: 4,
        id: 4,
        type: "TIP",
        description: "Tellor Improvement Plan v2.0.8",
        status: "accepted",
        votes: 93
    },
    {   
        key: 5,
        id: 5,
        type: "Dispute",
        description: "0xFfL2...2231 submitted 77.9 for BNB/USD",
        status: "rejected",
        votes: 88
    },
    {   
        key: 6,
        id: 6,
        type: "Treasury",
        description: "Increase rate 0.07%",
        status: "accepted",
        votes: 93
    },{   
        key: 7,
        id: 7,
        type: "Dispute",
        description: "0x44pl...8879 submitted 9999.9 for BTC/USD",
        status: "accepted",
        votes: 23,
    },
    {   
        key: 8,
        id: 8,
        type: "Dispute",
        description: "0xFfL2...2231 submitted 77.9 for BNB/USD",
        status: "accepted",
        votes: 123,
    },
    {   
        key: 9,
        id: 9,
        type: "Dispute",
        description: "0xFfL2...2231 disputes vote item 11",
        status: "accepted",
        votes: 88
    },
    {   
        key: 10,
        id: 10,
        type: "TIP",
        description: "Tellor Improvement Plan v2.0.8",
        status: "accepted",
        votes: 93
    },
    {   
        key: 11,
        id: 11,
        type: "Dispute",
        description: "0xFfL2...2231 submitted 77.9 for BNB/USD",
        status: "rejected",
        votes: 88
    },
    {   
        key: 12,
        id: 12,
        type: "Treasury",
        description: "Increase rate 0.07%",
        status: "accepted",
        votes: 93
    },
    
]

export default PastVoteItems;





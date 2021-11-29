import React from "react";
import "./ReportingHistory.scss";
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { useMediaQuery } from "react-responsive";

const ReportingHistory = (props) => {
    const { data } = props;

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
                    <img src={r.avatar} className="avatar" />
                    <p className="link-black latestReport">{r.reporter}</p>
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
                    <img src={r.avatar} className="avatar" />
                    <p className="link-black latestReport">{r.reporter}</p>
                </div>),
            filters: [
                { text: "E0x44pl...8879", value: "0x44pl...8879" },
                { text: "0x87e6...987E", value: "B0x87e6...987E" },
                { text: "0x44pxxl...8879", value: "0x44pxxl...8879" },
            ],
            onFilter: (value, record) => record.reporter.includes(value),
            width: "20%",
        },
    ];

    const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
    //table
    if (data && data.length > 0) {
        return (
            <div className="ReportingHistory">
                <div className="ReportingHistory__header">
                    <h3 className="page-header-small">Reporting history</h3>
                </div>
                <div className="ReportingHistory__table">
                    <Table 
                        dataSource={data} 
                        columns={isMobile ? columns_mobile : columns} 
                        pagination={{ defaultPageSize: 3 }}  />
                </div>
            </div>
        );
    }
    //empty data
    return (
        <div className="ReportingHistory">
             <div className="ReportingHistory__header">
                <div className="empty-container">
                    <h3 className="dark">Reporting History</h3>
                    <p className="page-text dark">No reporting history yet</p>
                </div>
            </div>
        </div>
    ); 
};

ReportingHistory.propTypes = {
    data: PropTypes.array.isRequired,
}

export default ReportingHistory;

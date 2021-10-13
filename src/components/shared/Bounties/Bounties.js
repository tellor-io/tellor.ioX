import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import './Bounties.scss'

import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

export default function Bounties() {
    const isMobile = useMediaQuery({ query: "(max-width: 810px)" });

    const dummyData = [
        {
            key: 1,
            title: "title test",
            jobType: "jobType test",
            tributes: "100",
            available: "available test",
            description: "description test",
            skills: "skills test",
            notes: "notes test",
        },
        {
            key: 2,
            title: "title test 2",
            jobType: "kobType test 2",
            tributes: "10000",
            available: "available test",
            description: "description test",
            skills: "skills test",
            notes: "notes test",
        }
    ]

    const columns = [
        {
          title: "Title",
          dataIndex: "title",
          width: "40%",
        },
        {
          title: "Type",
          dataIndex: "jobType",
          filters: [
            { text: "Builds", value: "Builds" },
            { text: "Content", value: "Content" },
            { text: "Deeper Research", value: "Deeper Research" },
            { text: "Documentation", value: "Documentation" },
            { text: "Hacks", value: "Hacks" },
            { text: "Various", value: "Various" },
          ],
          onFilter: (value, record) => record.jobType.includes(value),
          sorter: {
            compare: (a, b) => a.jobType.localeCompare(b.jobType),
            multiple: 1,
          },
          width: "25%",
        },
        {
          title: "Availability",
          dataIndex: "available",
          width: "15%",
        },
        {
          title: "Reward",
          dataIndex: "tributes",
          width: "15%",
          sorter: {
            compare: (a, b) => a.tributes - b.tributes,
            multiple: 1,
          },
          // render: tributes => tributes+" USD",
          render: (tributes) => {
            if (tributes === "Various") {
              return tributes;
            } else {
              return tributes + " USD";
            }
          },
        },
      ];
    
      const columns_mobile = [
        {
          title: "Title",
          dataIndex: "title",
          width: "70%",
        },
        {
          title: "Reward",
          dataIndex: "tributes",
          width: "10%",
          sorter: {
            compare: (a, b) => a.tributes - b.tributes,
            multiple: 1,
          },
          // render: tributes => tributes+" USD",
          render: (tributes) => {
            if (tributes === "Various") {
              return tributes;
            } else {
              return tributes + " USD";
            }
          },
        },
      ];




    return (
        <div className="Bounties">
        <Table
          pagination={false}
          columns={isMobile ? columns_mobile : columns}
          onRow={(record) => {
            return {
            //   onClick: () => {
            //     setJobForm({
            //       jobTitle: record.title,
            //       jobType: record.jobType,
            //     });
            //   },
            };
          }}
          expandable={{
            expandedRowRender: (record, i) => {
              return isMobile ? (
                <div className="bountieExpanded">
                  <div className="firstRow">
                    <div>
                      <p style={{ margin: 0 }}>
                        {record.description ? record.description : "N/A"}
                      </p>
                      <div className="smallestMargin"></div>
                      <p style={{ margin: 0 }}>
                        <span className="bold">Availability:</span>{" "}
                        {record.available ? record.available : "N/A"}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="bold">Type:</span>{" "}
                        {record.jobType ? record.jobType : "N/A"}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="bold">Necessary Skill(s):</span>{" "}
                        {record.skills ? record.skills : "N/A"}
                      </p>
                      {record.notes ? (
                        <p style={{ margin: 0 }}>
                          {" "}
                          <span className="bold">Notes: </span>
                          <a style={{ marginLeft: "5px" }} href={record.notes}>
                            {record.notes}
                          </a>
                        </p>
                      ) : null}
                    </div>
                    {/* <Button
                      id="claimModalButton"
                      onClick={() => addtoClaimerPanels(i)}
                    >
                      {claimerPanels.includes(i)
                        ? "Close"
                        : "Claim this bounty"}
                    </Button> */}
                  </div>

                  {/* <div className="claimForm">
                    <Collapse
                      defaultActiveKey={["0"]}
                      activeKey={claimerPanels}
                    >
                      <Panel header="Bracket panel" key={i}>
                        <ClaimModal jobForm={jobForm} />
                      </Panel>
                    </Collapse>
                  </div> */}
                </div>
              ) : (
                <div className="bountieExpanded">
                  <div className="firstRow">
                    <div>
                      <p style={{ margin: 0 }}>
                        {record.description ? record.description : "N/A"}
                      </p>
                      <div className="smallestMargin"></div>
                      <p style={{ margin: 0 }}>
                        <span className="bold">Necessary Skill(s):</span>{" "}
                        {record.skills ? record.skills : "N/A"}
                      </p>
                      {record.notes ? (
                        <p style={{ margin: 0 }}>
                          {" "}
                          <span className="bold">Notes: </span>
                          <a style={{ marginLeft: "5px" }} href={record.notes}>
                            {record.notes}
                          </a>
                        </p>
                      ) : null}
                    </div>
                    {/* <Button
                      id="claimModalButton"
                      onClick={() => addtoClaimerPanels(i)}
                    >
                      {claimerPanels.includes(i)
                        ? "Close"
                        : "Claim this bounty"}
                    </Button> */}
                  </div>

                  {/* <div className="claimForm">
                    <Collapse
                      defaultActiveKey={["0"]}
                      activeKey={claimerPanels}
                    >
                      <Panel header="Bracket panel" key={i}>
                        <ClaimModal jobForm={jobForm} />
                      </Panel>
                    </Collapse>
                  </div> */}
                </div>
              );
            },
            expandIcon: ({ expanded, onExpand, record }) =>
              expanded ? (
                <MinusCircleOutlined onClick={(e) => onExpand(record, e)} />
              ) : (
                <PlusCircleOutlined onClick={(e) => onExpand(record, e)} />
              ),
            rowExpandable: (record) => record.builds !== "Not Expandable",
          }}
          expandIconColumnIndex={4}
          dataSource={dummyData}
        />
        </div>
    )
}

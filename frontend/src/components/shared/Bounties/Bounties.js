import React, { useState, useEffect } from "react";
import "./Bounties.scss";

//Ant D
import { Button, Table, Collapse } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
//Components
import ClaimForm from "./ClaimForm";

export default function Bounties(props) {
  //Component State
  let initialJobForm = {
    jobTitle: "",
    jobType: "",
  };

  const [bountiesData, setBountiesData] = useState();
  const [jobForm, setJobForm] = useState(initialJobForm);
  const [claimerPanels, setPanelsArr] = useState([]);
  const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
  const { darkBackground } = props;
  //dynamic styling
  const classType = darkBackground ? "BountiesDark" : "Bounties";

  //useEffect to populate the table with data from the Sheety API
  useEffect(() => {
    const bountiesUrl =
      "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/bounties";
    try {
      fetch(bountiesUrl)
        .then((response) => response.json())
        .then((result) => {
          dataHelper(result.bounties);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  //DataHelper function to get Sheety API data into proper form for the AntD Table
  const dataHelper = (unformattedData) => {
    let dataArray = [];
    let randomBountyObj = {
      key: 1000,
      title: "Suggest A Bounty",
      jobType: "Various",
      tributes: "Various",
      available: "Available",
      description:
        "Have a suggestion? After you claim this bounty, let us know about your idea on how to expand Tellor in the comments section!",
    };
    unformattedData.forEach((data) => {
      let obj = {
        key: data.id,
        title: data.bountiesTitle ? data.bountiesTitle : null,
        jobType: data.bountiesType ? data.bountiesType : null,
        tributes: data.tributes ? data.tributes : null,
        available: data.available ? data.available : null,
        description: data.description ? data.description : null,
        skills: data.skills ? data.skills : null,
        notes: data.notes ? data.notes : null,
      };
      if (obj.title && obj.jobType) {
        dataArray.push(obj);
      }
    });
    dataArray.push(randomBountyObj);
    setBountiesData(dataArray);
  };

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

  // const addtoClaimerPanels = (e) => {
  //   const arr = [...claimerPanels];
  //   if (arr.includes(e)) {
  //     const index = arr.indexOf(e);
  //     if (index > -1) {
  //       arr.splice(index, 1);
  //     }
  //   } else {
  //     arr.push(e);
  //   }
  //   setPanelsArr(arr);
  // };

  return (
    <div className={classType}>
      <Table
        pagination={{ pageSize: 5, showLessItems: true }}
        columns={isMobile ? columns_mobile : columns}
        onRow={(record) => {
          return {
            onClick: () => {
              setJobForm({
                jobTitle: record.title,
                jobType: record.jobType,
              });
            },
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
                  <Button id="claimModalButton">
                    <a
                      href="https://discord.com/channels/461602746336935936/927598061746790400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Claim Bounty
                    </a>
                  </Button>
                </div>

                <div className="claimForm">
                  <Collapse
                    defaultActiveKey={["0"]}
                    activeKey={claimerPanels}
                    className="claimFormExpanded"
                    style={{
                      display: claimerPanels.includes(i) ? "block" : "none",
                    }}
                  >
                    <ClaimForm
                      jobForm={jobForm}
                      claimerPanels={claimerPanels}
                      indexKey={i}
                      setPanelsArr={setPanelsArr}
                      record={record}
                    />
                  </Collapse>
                </div>
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
                  <Button id="claimModalButton">
                    <a
                      href="https://discord.com/channels/461602746336935936/927598061746790400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Claim Bounty
                    </a>
                  </Button>
                </div>
                <div className="claimForm">
                  <Collapse
                    defaultActiveKey={["0"]}
                    activeKey={claimerPanels}
                    className="claimFormExpanded"
                    style={{
                      display: claimerPanels.includes(i) ? "block" : "none",
                    }}
                  >
                    <ClaimForm
                      jobForm={jobForm}
                      claimerPanels={claimerPanels}
                      indexKey={i}
                      setPanelsArr={setPanelsArr}
                      record={record}
                    />
                  </Collapse>
                </div>
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
        dataSource={bountiesData}
      />
    </div>
  );
}

Bounties.propTypes = {
  darkBackground: PropTypes.bool,
};

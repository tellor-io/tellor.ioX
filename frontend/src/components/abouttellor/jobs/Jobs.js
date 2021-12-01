import React from "react";
import "./Jobs.scss";
//Redux
import { useSelector } from "react-redux";
//Markdown Interpreter
import ReactMarkdown from "react-markdown";

const Jobs = () => {
  //Redux State
  const jobPostings = useSelector((state) => state.strapiData.jobs);

  return (
    <div id="jobs" className="Jobs">
      {/* panel intro */}
      <div className="Jobs__intro">
        <h2 className="page-header-small-black">Jobs</h2>
        <p className="page-text-black">
          We&apos;re looking for individuals with:
        </p>
        <ul className="page-text-black">
          <li>
            Solid work ethic - you are motivated to learn and work independently
          </li>
          <li>Dependability - you meet deadlines and articulate roadblocks</li>
          <li>Problem solver - you can debug and troubleshoot code</li>
          <li>
            Passion - you enjoy what you do and working with new technologies
            and building the new economy
          </li>
          <li>
            Flexibility - you want to learn new things and jump on any task that
            needs to be done
          </li>
        </ul>
      </div>
      {/* job listings */}
      {jobPostings.map((job) => {
        return (
          <ReactMarkdown key={job.id} className="Job">
            {job.job}
          </ReactMarkdown>
        );
      })}
    </div>
  );
};

export default Jobs;

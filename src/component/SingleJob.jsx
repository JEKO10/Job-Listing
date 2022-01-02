import React from "react";

function SingleJob({ job }) {
  return (
    <div className="job">
      <img src={job.logo} alt={job.company} />
      <div>
        <div>
          <h1>{job.company}</h1>
          <h1>Featured</h1>
          <h1>New</h1>
        </div>
        <div>
          <h1>{job.position}</h1>
        </div>
        <div>
          <h1>{job.postedAt}</h1>
          <h1>{job.contract}</h1>
          <h1>{job.location}</h1>
        </div>
      </div>
      <div>
        <h1>{job.role}</h1>
        <h1>{job.level}</h1>
        {job.languages.map((lang) => {
          return <h1>{lang}</h1>;
        })}
        {job.tools.map((tool) => {
          return <h1>{tool}</h1>;
        })}
      </div>
    </div>
  );
}

export default SingleJob;

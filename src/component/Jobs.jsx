import React from "react";
import data from "../data.json";
import SingleJob from "./SingleJob";

function Jobs() {
  return (
    <section className="jobs">
      {data.map((job) => {
        return (
          <div className="job" key={job.id}>
            <SingleJob {...job} />
          </div>
        );
      })}
    </section>
  );
}

export default Jobs;

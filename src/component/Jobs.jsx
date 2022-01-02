import React from "react";
import data from "./data.json";
import SingleJob from "./SingleJob";

function Jobs() {
  return (
    <section className="jobs">
      {data.map((job) => {
        return (
          <div key={job.id}>
            <SingleJob job={job} />
          </div>
        );
      })}
    </section>
  );
}

export default Jobs;

import React from "react";
import data from "./data.json";
import SingleJob from "./SingleJob";

function Jobs({ handleFilters }) {
  return (
    <section className="jobs">
      {data.map((job) => {
        return (
          <div key={job.id}>
            <SingleJob job={job} handleFilters={handleFilters} />
          </div>
        );
      })}
    </section>
  );
}

export default Jobs;

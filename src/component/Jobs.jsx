import React from "react";
import data from "./data.json";
import SingleJob from "./SingleJob";

function Jobs({ handleFilters, filters }) {
  let filterJobs = (jobTags, filters) =>
    filters.every((value) => jobTags.includes(value));

  return (
    <section className="jobs">
      {data.map((job) => {
        const { tools, languages, level, role } = job;
        const jobTags = [level, role, ...languages, ...tools];

        return (
          filterJobs(jobTags, filters) && (
            <div key={job.id}>
              <SingleJob job={job} handleFilters={handleFilters} />
            </div>
          )
        );
      })}
    </section>
  );
}

export default Jobs;

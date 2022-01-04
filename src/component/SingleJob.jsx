function SingleJob({ job, handleFilters }) {
  const { tools, languages, level, role } = job;

  const jobTags = [level, role, ...languages, ...tools];

  return (
    <div className={`job ${job.featured ? "featured" : ""}`}>
      <div>
        <img src={job.logo} alt={job.company} />
        <div>
          <div>
            <h1 id="name">{job.company}</h1>
            {job.new ? <h1 id="new">New!</h1> : ""}
            {job.featured ? <h1 id="featured">Featured</h1> : ""}
          </div>
          <div>
            <h1 id="position">{job.position}</h1>
          </div>
          <div>
            <h1 id="posted">{job.postedAt}</h1>
            <span>•</span>
            <h1 id="contract">{job.contract}</h1>
            <span>•</span>
            <h1 id="location">{job.location}</h1>
          </div>
        </div>
      </div>
      <div>
        {jobTags.map((tag, index) => {
          return (
            <h1
              className="tag"
              key={index}
              onClick={() => {
                handleFilters(tag);
              }}
            >
              {tag}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default SingleJob;

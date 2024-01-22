import JobCard from "@/components/shared/JobCard";

function JobSection() {
  const jobs = [
    {
      _id: "xyz",
      title: "Intern - Software Engineer",
      type: "Full-time",
      location: "Remote",
    },
    {
      _id: "abc",
      title: "Software Engineer",
      type: "Full-time",
      location: "Remote",
    },
  ];

  return (
    <section className="py-8">
      <h2>Available Jobs</h2>
      <div className="mt-4 flex flex-col gap-y-8">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job._id}
              title={job.title}
              type={job.type}
              location={job.location}
              _id={job._id}
              isAdmin={false}
            />
          );
        })}
      </div>
    </section>
  );
}

export default JobSection;

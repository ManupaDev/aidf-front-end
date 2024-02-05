import JobCard from "@/components/shared/JobCard";
import { useEffect, useState } from "react";
import { Job } from "@/types/job";

function JobSection() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("http://localhost:8000/jobs", {
        method: "GET",
      });
      const data: Job[] = await res.json();
      return data;
    };

    fetchJobs().then((data) => setJobs(data));
  }, []);

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

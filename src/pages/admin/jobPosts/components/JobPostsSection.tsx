import JobCard from "@/components/shared/JobCard";
import { Job } from "@/types/job";
import { useState, useEffect } from "react";

function JobPostsSection() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const getJobs = async () => {
      const token = await window.Clerk.session.getToken();

      const res = await fetch("http://localhost:8000/jobs", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data: Job[] = await res.json();
      return data;
    };

    getJobs()
      .then((data) => setJobs(data as Job[]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-8">
      <h2>Current Job Postings</h2>
      <div className="mt-4 flex flex-col gap-y-4">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job._id}
              title={job.title}
              type={job.type}
              location={job.location}
              _id={job._id}
              isAdmin={true}
            />
          );
        })}
      </div>
    </section>
  );
}

export default JobPostsSection;

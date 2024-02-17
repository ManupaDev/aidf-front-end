import { Job } from "@/types/job";
import { JobApplication } from "@/types/jobApplication";

export const getJobs = async () => {
  const res = await fetch("http://localhost:8000/jobs", {
    method: "GET",
  });
  const data: Job[] = await res.json();
  return data;
};

export const getJobById = async (id: string) => {
  const token = await window.Clerk.session.getToken();

  const res = await fetch(`http://localhost:8000/jobs/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data: Job = await res.json();
  return data;
};

export const getJobApllicationsForJob = async (id: string) => {
  const token = await window.Clerk.session.getToken();

  const res = await fetch(`http://localhost:8000/jobApplications?jobId=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data: JobApplication[] = await res.json();
  return data;
};

export const getJobApplicationById = async (id: string) => {
  const token = await window.Clerk.session.getToken();

  const res = await fetch(`http://localhost:8000/jobApplications/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data: JobApplication = await res.json();
  return data;
};

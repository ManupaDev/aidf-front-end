import { Separator } from "@/components/ui/separator";
import { Briefcase, MapPin } from "lucide-react";
import JobApplicationCard from "./components/JobApplicationCard";

function JobPage() {
  const job = {
    _id: "xyz",
    title: "Intern - Software Engineer",
    description:
      "We are seeking a motivated and enthusiastic Software Engineering Intern to join our dynamic team. As a Software Engineering Intern, you will have the opportunity to work closely with experienced developers and contribute to real-world projects. This internship is designed to provide valuable hands-on experience, foster professional growth, and enhance your technical skills.",
    type: "Full-time",
    location: "Remote",
    questions: [
      "Share your academic background and highlight key programming concepts you've mastered. How has your education shaped your current tech skill set ?",
      "Describe your professional development, emphasizing any certifications obtained. How have these certifications enriched your technical abilities, and can you provide an example of their practical application ?",
      "Discuss notable projects in your programming experience. What challenges did you face, and how did you apply your skills to overcome them? Highlight the technologies used and the impact of these projects on your overall growth as a prefessional ?",
    ],
  };

  const jobApplications = [
    {
      _id: "1",
      fullName: "Manupa Samarawickrama",
      jobId: "xyz",
    },
  ];

  return (
    <div>
      <div>
        <h2>{job?.title}</h2>
        <div className="flex items-center gap-x-4 mt-4">
          <div className="flex items-center gap-x-2">
            <Briefcase />
            <span>{job?.type}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPin />
            <span>{job?.location}</span>
          </div>
        </div>
        {/* <div className="gap-x-4 flex items-center mt-4">
          <Badge>NodeJS</Badge>
          <Badge>ReactJS</Badge>
          <Badge>AWS</Badge>
        </div> */}
      </div>
      <div className="mt-4 py-4">
        <p>{job?.description}</p>
      </div>
      <Separator />
      <div className="py-8">
        <h2>Job Applications</h2>
        <div className="mt-4 flex flex-col gap-y-4">
          {jobApplications.map((application) => (
            <JobApplicationCard
              key={application._id}
              fullName={application.fullName}
              _id={application._id}
              jobId={application.jobId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobPage;

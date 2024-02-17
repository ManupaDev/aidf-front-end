import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { JobApplication } from "@/types/jobApplication";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function AdminJobApplicationPage() {
  const [jobApplication, setJobApplication] = useState<JobApplication | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  const { applicationId } = useParams();

  useEffect(() => {
    if (!applicationId) {
      return;
    }
    const getJobApplicationById = async (id: string) => {
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

    getJobApplicationById(applicationId)
      .then((data) => {
        setJobApplication(data as JobApplication);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [applicationId]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-4">
      <Card className="bg-foreground">
        <CardHeader className="flex-row items-center gap-x-4">
          <CardTitle>{jobApplication?.fullName}</CardTitle>
          <Badge
            className={cn({
              "bg-red-500":
                jobApplication?.rating?.toLocaleLowerCase() === "bad",
              "bg-orange-400":
                jobApplication?.rating?.toLocaleLowerCase() === "moderate",
              "bg-teal-500":
                jobApplication?.rating?.toLocaleLowerCase() === "good",
            })}
          >
            {jobApplication?.rating}
          </Badge>
        </CardHeader>
      </Card>

      <Card className="p-4">
        {jobApplication!.answers.map((answer, i) => {
          return <p key={i}>{answer}</p>;
        })}
      </Card>
      <div>
        <Button variant="link" asChild>
          <Link to={"/admin/jobs"}>Back</Link>
        </Button>
      </div>
    </div>
  );
}

export default AdminJobApplicationPage;

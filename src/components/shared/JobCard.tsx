import { Briefcase, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type JobCardProps = {
  _id: string;
  title: string;
  type: string;
  location: string;
  isAdmin: boolean;
};

function JobCard(props: JobCardProps) {
  return (
    <Link
      to={props.isAdmin ? `/admin/job/${props._id}` : `/job/${props._id}`}
      className="block"
    >
      <Card>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="gap-x-4">
          <div className="flex items-center gap-x-2">
            <Briefcase />
            <span>{props.type}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPin />
            <span>{props.location}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default JobCard;

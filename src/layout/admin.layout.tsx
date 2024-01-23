import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

function AdminMainLayout() {
  return (
    <div>
      <div className="flex justify-end gap-x-4 items-center py-4">
        <Link to="/admin/jobs">Job Posts</Link>
        <Button asChild>
          <Link to="/admin/job/create">Post A Job</Link>
        </Button>
      </div>
      <Outlet />
    </div>
  );
}

export default AdminMainLayout;

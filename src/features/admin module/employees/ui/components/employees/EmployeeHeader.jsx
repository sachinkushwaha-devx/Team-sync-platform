import { Download, UserPlus } from "lucide-react";
import Button from "../Button";
import { useNavigate } from "react-router";

const EmployeeHeader = () => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
          Employee Directory
        </h1>

        <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">
          Manage your organization's workforce and roles.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <Button variant="secondary" icon={<Download size={18} />}>
          Export
        </Button>

        <Button
          handleClick={() => navigate("/home/add-employee")}
          icon={<UserPlus size={18} />}
        >
          Add Employee
        </Button>
      </div>
    </div>
  );
};

export default EmployeeHeader;
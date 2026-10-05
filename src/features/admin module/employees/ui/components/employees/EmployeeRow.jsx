import { useState } from "react";
import { MoreVertical } from "lucide-react";
import { updateEmployee } from "../../../api/EmployeeApis.jsx";
import StatusBadge from "./StatusBadge";


const EmployeeRow = ({ employee }) => {
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  return (
    <tr className="border-b border-[var(--border-color)]">
      {/* PROFILE */}
      <td className="py-6 px-6">
        <div className="flex items-center gap-4">
          <img
            src={
              employee.avatar ||
              "https://ui-avatars.com/api/?name=" + employee.name
            }
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-lg text-[var(--text-primary)]">
              {employee.name}
            </h3>

            <p className="text-[var(--text-secondary)]">{employee.email}</p>
          </div>
        </div>
      </td>

      {/* ROLE */}
      <td className="px-6">
        <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-medium text-sm">
          {employee.role}
        </span>
      </td>

      {/* DEPARTMENT */}
      <td className="px-6 text-[var(--text-primary)] capitalize">
        {employee.department}
      </td>

      {/* STATUS */}
      <td className="px-6">
        <StatusBadge status={employee.status} />
      </td>

      {/* DATE */}
      <td className="px-6 text-[var(--text-secondary)]">
        {new Date(employee.createdAt).toDateString()}
      </td>

      {/* ACTIONS */}
      <td className="relative px-6">
        <button
          type="button"
          aria-label={`Actions for ${employee.name}`}
          aria-expanded={isActionsOpen}
          aria-haspopup="menu"
          className="rounded-lg p-2 text-[var(--text-secondary)] transition hover:bg-[var(--bg-main)] hover:text-[var(--text-primary)]"
          onClick={() => setIsActionsOpen((isOpen) => !isOpen)}
        >
          <MoreVertical size={20} aria-hidden="true" />
        </button>
        {isActionsOpen && (
          <div
            role="menu"
            className="absolute right-4 top-12 z-10 min-w-36 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] p-1 shadow-lg"
          >
            <button
              type="button"
              role="menuitem"
              className="w-full rounded-md px-3 py-2 text-left text-sm text-[var(--text-primary)] hover:bg-[var(--bg-main)]"
              onClick={async () => {
                await updateEmployee(employee._id, {
                  status: employee.status === "inactive" ? "active" : "inactive",
                });
                setIsActionsOpen(false);
              }}
            >
              {employee.status === "inactive" ? "Activate" : "Deactivate"}
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default EmployeeRow;
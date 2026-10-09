import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import {
  MoreVertical,
  Pencil,
  Trash2,
  UserCheck,
  UserX,
} from "lucide-react";
import {
  deleteEmployee,
  updateEmployee,
} from "../../../api/EmployeeApis.jsx";
import StatusBadge from "./StatusBadge";


const EmployeeRow = ({
  employee,
  isActionsOpen,
  onToggleActions,
  onCloseActions,
}) => {
  const [actionError, setActionError] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const actionsRef = useRef(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!isActionsOpen) return undefined;

    const handleOutsideClick = (event) => {
      if (!actionsRef.current?.contains(event.target)) {
        onCloseActions();
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") onCloseActions();
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isActionsOpen, onCloseActions]);

  const handleStatusChange = async () => {
    setIsUpdating(true);
    setActionError("");
    try {
      await updateEmployee(employee._id, {
        status: employee.status === "inactive" ? "active" : "inactive",
      });
      await queryClient.invalidateQueries({ queryKey: ["employees"] });
      onCloseActions();
    } catch (error) {
      setActionError(
        error.response?.data?.message ?? error.message ?? "Could not update employee status."
      );
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Delete ${employee.name}? This cannot be undone.`)) {
      return;
    }

    setIsUpdating(true);
    setActionError("");
    try {
      await deleteEmployee(employee._id);
      await queryClient.invalidateQueries({ queryKey: ["employees"] });
      onCloseActions();
    } catch (error) {
      setActionError(
        error.response?.data?.message ?? error.message ?? "Could not delete employee."
      );
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <tr className="border-b border-[var(--border-color)]">
      {/* PROFILE */}
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <img
            src={
              employee.avatar ||
              "https://ui-avatars.com/api/?name=" + employee.name
            }
            alt=""
            className="h-11 w-11 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-sm text-[var(--text-primary)]">
              {employee.name}
            </h3>

            <p className="text-xs text-[var(--text-secondary)]">{employee.email}</p>
          </div>
        </div>
      </td>

      {/* ROLE */}
      <td className="px-4">
        <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium text-xs">
          {employee.role}
        </span>
      </td>

      {/* DEPARTMENT */}
      <td className="px-4 text-[var(--text-primary)] capitalize">
        {employee.department}
      </td>

      {/* STATUS */}
      <td className="px-4">
        <StatusBadge status={employee.status} />
      </td>

      {/* DATE */}
      <td className="px-4 text-xs text-[var(--text-secondary)]">
        {new Date(employee.createdAt).toDateString()}
      </td>

      {/* ACTIONS */}
      <td className="px-4">
        <div ref={actionsRef} className="relative">
          <button
            type="button"
            aria-label={`Actions for ${employee.name}`}
            aria-expanded={isActionsOpen}
            aria-haspopup="menu"
            className="rounded-lg p-2 text-[var(--text-secondary)] transition hover:bg-[var(--bg-main)] hover:text-[var(--text-primary)]"
            onClick={onToggleActions}
          >
            <MoreVertical size={20} aria-hidden="true" />
          </button>
          {isActionsOpen && (
            <div
              role="menu"
              className="absolute right-0 top-12 z-10 min-w-36 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] p-1 shadow-lg"
            >
              <button
                type="button"
                role="menuitem"
                disabled={isUpdating}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[var(--text-primary)] hover:bg-[var(--bg-main)] disabled:opacity-50"
                onClick={() => {
                  onCloseActions();
                  navigate("/home/add-employee", { state: { employee } });
                }}
              >
                <Pencil size={16} aria-hidden="true" />
                Update employee
              </button>
              <button
                type="button"
                role="menuitem"
                disabled={isUpdating}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[var(--text-primary)] hover:bg-[var(--bg-main)] disabled:opacity-50"
                onClick={handleStatusChange}
              >
                {employee.status === "inactive" ? (
                  <UserCheck size={16} aria-hidden="true" />
                ) : (
                  <UserX size={16} aria-hidden="true" />
                )}
                {employee.status === "inactive" ? "Mark active" : "Mark inactive"}
              </button>
              <button
                type="button"
                role="menuitem"
                disabled={isUpdating}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-red-500 hover:bg-[var(--bg-main)] disabled:opacity-50"
                onClick={handleDelete}
              >
                <Trash2 size={16} aria-hidden="true" />
                Delete employee
              </button>
              {actionError && (
                <p role="alert" className="px-3 py-2 text-xs text-red-500">
                  {actionError}
                </p>
              )}
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;
import { BriefcaseBusiness } from "lucide-react";

const EmploymentDetailsForm = ({
  register,
  errors,
}) => {
  return (
    <div className="mt-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-4 sm:p-6 lg:p-7">

      {/* TITLE */}
      <div className="flex items-center gap-3 pb-4 border-b border-[var(--border-color)]">

        <BriefcaseBusiness
          size={22}
          className="text-[var(--brand-color)]"
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
          Employment Details
        </h2>

      </div>

      {/* FORM */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">

        {/* DEPARTMENT */}
        <div>

          <label className="block mb-3 text-sm font-semibold text-[var(--text-secondary)]">
            Department
          </label>

          <select
            {...register("department")}
            className="w-full h-12 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 text-sm text-[var(--text-primary)] outline-none"
          >
            <option value="">
              Select Department
            </option>

            <option value="developer">
              Developer
            </option>

            <option value="administrative">
              Administrative
            </option>

            <option value="security">
              Security
            </option>

            <option value="management">
              Management
            </option>

          </select>

        </div>

        {/* ROLE */}
        <div>

          <label className="block mb-3 text-sm font-semibold text-[var(--text-secondary)]">
            Role
          </label>

          <select
            {...register("role")}
            className="w-full h-12 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 text-sm text-[var(--text-primary)] outline-none"
          >
            <option value="">
              Select Role
            </option>

            <option value="admin">
              Admin
            </option>

            <option value="employee">
              Employee
            </option>

          </select>

        </div>

        {/* JOINING DATE */}
        <div>

          <label className="block mb-3 text-sm font-semibold text-[var(--text-secondary)]">
            Joining Date
          </label>

          <input
            type="date"
            {...register("joiningDate")}
            className="w-full h-12 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 text-sm text-[var(--text-primary)] outline-none"
          />

        </div>

        {/* STATUS */}
        <div>

          <label className="block mb-4 text-sm font-semibold text-[var(--text-secondary)]">
            Status
          </label>

          <div className="flex items-center gap-6 text-sm text-[var(--text-primary)]">

            <label className="flex items-center gap-2">

              <input
                type="radio"
                value="active"
                {...register("status")}
              />

              Active

            </label>

            <label className="flex items-center gap-2">

              <input
                type="radio"
                value="inactive"
                {...register("status")}
              />

              Inactive

            </label>

          </div>

        </div>

      </div>
    </div>
  );
};

export default EmploymentDetailsForm;
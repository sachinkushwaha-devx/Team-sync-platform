import { useState } from "react";
import EmployeeRow from "./EmployeeRow";


const EmployeeTable = ({ employees = [] }) => {
  const [openActionsEmployeeId, setOpenActionsEmployeeId] = useState(null);

  return (
    <div className="overflow-x-auto">

      <table className="w-full min-w-[52rem]">

        <thead className="bg-[var(--bg-main)]">

          <tr className="text-left">

            <th className="px-6 py-5 text-[var(--text-secondary)]">
              Profile
            </th>

            <th className="px-6 py-5 text-[var(--text-secondary)]">
              Role
            </th>

            <th className="px-6 py-5 text-[var(--text-secondary)]">
              Department
            </th>

            <th className="px-6 py-5 text-[var(--text-secondary)]">
              Status
            </th>

            <th className="px-6 py-5 text-[var(--text-secondary)]">
              Joined Date
            </th>

            <th className="px-6 py-5 text-[var(--text-secondary)]">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (
            <EmployeeRow
              key={employee._id}
              employee={employee}
              isActionsOpen={openActionsEmployeeId === employee._id}
              onToggleActions={() =>
                setOpenActionsEmployeeId((openId) =>
                  openId === employee._id ? null : employee._id
                )
              }
              onCloseActions={() => setOpenActionsEmployeeId(null)}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default EmployeeTable;
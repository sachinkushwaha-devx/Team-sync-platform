import { useEmployee } from "../../hooks/useEmployees";
import EmployeeHeader from "../components/employees/EmployeeHeader";
import EmployeeStats from "../components/employees/EmployeeStats";
import SearchFilterBar from "../components/employees/SearchFilterBar";
import EmployeeTable from "../components/employees/EmployeeTable";
import Pagination from "../components/employees/Pagination.jsx";


const Employee = () => {

  const {
    data,
    isPending,
    isFetching,
    error,
    filters,
    handleSearchFilters,
    handlePageChange,
  } = useEmployee();
  console.log("data", data);
  const employees = Array.isArray(data?.employees)
    ? data.employees
    : Array.isArray(data)
      ? data
      : [];

  if (isPending) {
    return <p role="status" className="p-8">Loading employees...</p>;
  }

  return (
    <div className=" bg-[var(--bg-main)] p-8">
      <div className=" mx-auto">
        {/* HEADER */}
        <EmployeeHeader />

        {/* STATS */}
        <EmployeeStats employees={employees} />

        {/* TABLE SECTION */}
        <div className="mt-8 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl overflow-hidden">
          <SearchFilterBar
            filters={filters}
            handleSearchFilters={handleSearchFilters}
          />

          {isFetching && (
            <p role="status" className="p-4">Loading employee data...</p>
          )}
          {error && (
            <p role="alert" className="p-4 text-red-500">
              {error.response?.data?.message ?? error.message ?? "Could not load employees."}
            </p>
          )}
          {!error && employees.length === 0 && (
            <p role="status" className="p-6 text-center text-[var(--text-secondary)]">
              No employees found.
            </p>
          )}

          {!error && employees.length > 0 && (
            <EmployeeTable employees={employees} />
            
          )}
          {data?.pagination && (
            <Pagination
              pagination={data.pagination}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Employee;
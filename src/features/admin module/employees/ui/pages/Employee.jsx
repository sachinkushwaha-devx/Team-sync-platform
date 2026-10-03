import { useEffect } from "react";
import { useEmployee } from "../../hooks/useEmployees.jsx";

const Employee = () => {
  const { data, error, isPending, isFetching } = useEmployee();

  useEffect(() => {
    if (data) console.log("Employees API response:", data);
    if (error) console.error("Employees API request failed:", error);
  }, [data, error]);

  return (
    <main className="min-h-screen bg-(--bg-main) p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-semibold">Employees</h1>
        {isPending && <p role="status">Loading employees...</p>}
        {isFetching && !isPending && <p role="status">Refreshing employees...</p>}
        {!isPending && !error && (
          <p role="status" className="mt-4">
            Employee response logged in the browser console.
          </p>
        )}
        {error && (
          <p role="alert" className="mt-4 text-red-500">
            {error.response?.data?.message ?? error.message ?? "Could not load employees."}
          </p>
        )}
      </div>
    </main>
  );
};

export default Employee;
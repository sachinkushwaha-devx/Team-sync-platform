import { Search, ChevronDown } from "lucide-react";

const SearchFilterBar = ({ filters, handleSearchFilters }) => {
  console.log("filters", filters);
  return (
    <div className="border-b border-[var(--border-color)] p-4 sm:p-5">
      {/* SEARCH */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="relative w-full max-w-[26.25rem]">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
          />

          <input
            type="text"
            placeholder="Filter by name or keyword..."
            value={filters.search}
            onChange={(e) => handleSearchFilters("search", e.target.value)}
            className="w-full h-11 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] pl-11 pr-4 text-sm outline-none text-[var(--text-primary)] sm:h-12"
          />
        </div>
      </div>

      {/* FILTERS */}
      <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
        {/* ROLE */}
        <div className="relative w-full sm:w-auto">
          <select
            value={filters.role}
            onChange={(e) => handleSearchFilters("role", e.target.value)}
            className="h-11 w-full min-w-0 appearance-none rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 pr-10 text-sm text-[var(--text-primary)] outline-none sm:w-auto sm:min-w-[11rem] sm:px-4 sm:pr-10"
          >
            <option value="">All Roles</option>

            <option value="admin">Admin</option>

            <option value="employee">Employee</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]"
          />
        </div>

        {/* DEPARTMENT */}
        <div className="relative w-full sm:w-auto">
          <select
            value={filters.department}
            onChange={(e) => handleSearchFilters("department", e.target.value)}
            className="h-11 w-full min-w-0 appearance-none rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 pr-10 text-sm text-[var(--text-primary)] outline-none sm:w-auto sm:min-w-[12rem] sm:px-4 sm:pr-10"
          >
            <option value="">All Departments</option>

            <option value="developer">Developer</option>

            <option value="administrative">Administrative</option>

            <option value="security">Security</option>

            <option value="management">Management</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]"
          />
        </div>

        {/* STATUS */}
        <div className="relative w-full sm:w-auto">
          <select
            value={filters.status}
            onChange={(e) => handleSearchFilters("status", e.target.value)}
            className="h-11 w-full min-w-0 appearance-none rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 pr-10 text-sm text-[var(--text-primary)] outline-none sm:w-auto sm:min-w-[10rem] sm:px-4 sm:pr-10"
          >
            <option value="">All Status</option>

            <option value="active">Active</option>

            <option value="inactive">Inactive</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
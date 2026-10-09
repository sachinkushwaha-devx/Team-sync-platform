const AddEmployeeHeader = ({ isEditing = false }) => {
    const pageTitle = isEditing ? "Update Employee" : "Add Employee";

    return (
      <div className="mb-6 sm:mb-8">
  
        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
  
          <span>Team</span>
  
          <span>›</span>
  
          <span className="font-semibold text-[var(--text-primary)]">
            {isEditing ? "Update Employee" : "Add New Employee"}
          </span>
  
        </div>
  
        <h1 className="text-3xl font-bold mt-3 text-[var(--text-primary)] sm:text-4xl">
          {pageTitle}
        </h1>
  
        <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">
          Configure the new team member's workspace profile and permissions.
        </p>
  
      </div>
    );
  };
  
  export default AddEmployeeHeader;
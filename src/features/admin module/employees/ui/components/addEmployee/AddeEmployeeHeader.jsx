const AddEmployeeHeader = ({ isEditing = false }) => {
    const pageTitle = isEditing ? "Update Employee" : "Add Employee";

    return (
      <div className="mb-8">
  
        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
  
          <span>Team</span>
  
          <span>›</span>
  
          <span className="font-semibold text-[var(--text-primary)]">
            {isEditing ? "Update Employee" : "Add New Employee"}
          </span>
  
        </div>
  
        <h1 className="text-6xl font-bold mt-4 text-[var(--text-primary)]">
          {pageTitle}
        </h1>
  
        <p className="mt-3 text-xl text-[var(--text-secondary)]">
          Configure the new team member's workspace profile and permissions.
        </p>
  
      </div>
    );
  };
  
  export default AddEmployeeHeader;
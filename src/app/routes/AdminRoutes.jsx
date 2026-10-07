import Department from "../../features/admin module/departments/ui/pages/Department";
import Document from "../../features/admin module/documents/ui/pages/Document";
import AddEmployee from "../../features/admin module/employees/ui/pages/AddEmployee";
import Employee from "../../features/admin module/employees/ui/pages/Employee";
import Task from "../../features/admin module/tasks/ui/pages/Task";

export let adminRoutes = [
  {
    path: 'employee',
    element: <Employee />,
  },
  {
    path: 'add-employee',
    element: <AddEmployee />,
  },
  {
    path: 'task',
    element: <Task />,
  },
  {
    path: 'department',
    element: <Department />,
  },
  {
    path: 'document',
    element: <Document />,
  },
];
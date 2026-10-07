import { Link } from 'react-router-dom';

const adminFeatures = [
  { label: 'Employee directory', path: '/home/employee' },
  { label: 'Add employee', path: '/home/add-employee' },
  { label: 'Manage tasks', path: '/home/task' },
  { label: 'Departments', path: '/home/department' },
  { label: 'Documents', path: '/home/document' },
];

const AdminDashboard = () => (
  <section className="space-y-6">
    <div className="space-y-2">
      <h1 className="text-3xl font-bold text-(--text-primary)">Admin Dashboard</h1>
      <p className="text-(--text-secondary)">
        Manage employees, tasks, departments, and company documents.
      </p>
    </div>

    <nav aria-label="Admin features" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {adminFeatures.map(({ label, path }) => (
        <Link
          key={path}
          to={path}
          className="rounded-lg border border-gray-500 p-5 text-(--text-primary) transition hover:bg-(--bg-hover)"
        >
          {label}
        </Link>
      ))}
    </nav>
  </section>
);

export default AdminDashboard;
